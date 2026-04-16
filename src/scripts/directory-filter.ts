/**
 * Client-side search and filter for the Directory index page.
 * Hybrid SSR + client-side approach: all items are rendered server-side,
 * the script just toggles their visibility based on search input and pill filters.
 *
 * Survives Astro view transitions via the astro:page-load event.
 */

interface FilterState {
  search: string
  // Map of filter type -> selected value (single-select per group, like the original React UI)
  filters: Map<string, string>
}

function initDirectoryFilter() {
  const root = document.querySelector<HTMLElement>('[data-directory-root]')
  if (!root) return

  const searchInput = root.querySelector<HTMLInputElement>('[data-directory-search]')
  const pills = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-directory-filter]')
  )
  const items = Array.from(
    root.querySelectorAll<HTMLElement>('[data-directory-item]')
  )
  const grid = root.querySelector<HTMLElement>('[data-directory-grid]')
  const empty = root.querySelector<HTMLElement>('[data-directory-empty]')
  const clearBtn = root.querySelector<HTMLButtonElement>('[data-directory-clear]')
  const countEl = root.querySelector<HTMLElement>('[data-directory-count]')

  const state: FilterState = {
    search: '',
    filters: new Map(),
  }

  // Initialize default filter state from any pill marked active server-side.
  pills.forEach((pill) => {
    const type = pill.dataset.filterType
    if (!type) return
    if (pill.classList.contains('active')) {
      state.filters.set(type, pill.dataset.filterValue || 'All')
    } else if (!state.filters.has(type)) {
      // Fallback: if no active pill, default to 'All' once we see this type
      state.filters.set(type, 'All')
    }
  })

  function applyFilters() {
    const q = state.search.trim().toLowerCase()
    let visibleCount = 0

    items.forEach((item) => {
      const searchText = (item.dataset.searchText || '').toLowerCase()
      const tags = (item.dataset.tags || '').split('|').filter(Boolean)

      // Search match
      const matchesSearch = !q || searchText.includes(q)

      // Filter match: every active non-"All" filter value must be present in the item's tags.
      let matchesFilters = true
      for (const value of state.filters.values()) {
        if (value && value !== 'All' && !tags.includes(value)) {
          matchesFilters = false
          break
        }
      }

      const visible = matchesSearch && matchesFilters
      if (visible) {
        item.classList.remove('hidden')
        visibleCount++
      } else {
        item.classList.add('hidden')
      }
    })

    // Toggle empty state
    if (grid && empty) {
      if (visibleCount === 0) {
        grid.classList.add('hidden')
        empty.classList.remove('hidden')
      } else {
        grid.classList.remove('hidden')
        empty.classList.add('hidden')
      }
    }

    if (countEl) {
      countEl.textContent = String(visibleCount)
    }
  }

  function setActivePill(type: string, value: string) {
    pills.forEach((pill) => {
      if (pill.dataset.filterType !== type) return
      if (pill.dataset.filterValue === value) {
        pill.classList.add('active')
        pill.classList.remove('bg-warm-50', 'text-warm-600', 'hover:bg-warm-100', 'hover:text-warm-700')
        pill.classList.add('bg-seam-700', 'text-white')
      } else {
        pill.classList.remove('active')
        pill.classList.remove('bg-seam-700', 'text-white')
        pill.classList.add('bg-warm-50', 'text-warm-600', 'hover:bg-warm-100', 'hover:text-warm-700')
      }
    })
  }

  // Wire up search input
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value
      applyFilters()
    })
  }

  // Wire up filter pills
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const type = pill.dataset.filterType
      const value = pill.dataset.filterValue
      if (!type || value === undefined) return
      state.filters.set(type, value)
      setActivePill(type, value)
      applyFilters()
    })
  })

  // Clear filters button (in empty state)
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = ''
      state.search = ''
      // Reset every filter group to 'All'
      const types = new Set<string>()
      pills.forEach((p) => {
        if (p.dataset.filterType) types.add(p.dataset.filterType)
      })
      types.forEach((type) => {
        state.filters.set(type, 'All')
        setActivePill(type, 'All')
      })
      applyFilters()
    })
  }

  // Initial pass to make sure visible counts and empty state are in sync.
  applyFilters()
}

document.addEventListener('astro:page-load', initDirectoryFilter)
if (document.readyState !== 'loading') {
  initDirectoryFilter()
} else {
  document.addEventListener('DOMContentLoaded', initDirectoryFilter)
}
