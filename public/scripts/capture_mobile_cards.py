#!/usr/bin/env python3
"""Capture mobile screenshots of product card sections with badge/logo stacking."""

from playwright.sync_api import sync_playwright
import os
import time

SCREENSHOTS_DIR = "/Users/shanegring/ClaudeCode/SEAM/public/screenshots"
VIEWPORT_W = 390
VIEWPORT_H = 844

pages_config = [
    {
        "url": "http://localhost:4321/",
        "name": "01_homepage",
        "scroll_to_text": "What we offer",
        "description": "Homepage - What we offer product cards"
    },
    {
        "url": "http://localhost:4321/for/operators",
        "name": "02_operators",
        "scroll_to_text": "Your toolkit",
        "description": "Operators - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/for/developers-owners",
        "name": "03_developers_owners",
        "scroll_to_text": "Your toolkit",
        "description": "Developers/Owners - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/for/building-professionals",
        "name": "04_building_professionals",
        "scroll_to_text": "Your toolkit",
        "description": "Building Professionals - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/for/capital-providers",
        "name": "05_capital_providers",
        "scroll_to_text": "Your toolkit",
        "description": "Capital Providers - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/for/people",
        "name": "06_people",
        "scroll_to_text": "Your toolkit",
        "description": "People - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/for/impact-professionals",
        "name": "07_impact_professionals",
        "scroll_to_text": "Your toolkit",
        "description": "Impact Professionals - Your toolkit product cards"
    },
    {
        "url": "http://localhost:4321/community",
        "name": "08_community",
        "scroll_to_text": "Choose your path",
        "description": "Community - Choose your path membership cards"
    },
]


def capture_page(page, config):
    """Navigate to a page, scroll to cards section, and screenshot."""
    url = config["url"]
    name = config["name"]
    scroll_text = config["scroll_to_text"]
    desc = config["description"]

    print(f"\n{'='*60}")
    print(f"Capturing: {desc}")
    print(f"URL: {url}")
    print(f"{'='*60}")

    # Navigate
    try:
        page.goto(url, wait_until="networkidle", timeout=15000)
    except Exception as e:
        print(f"  Warning on navigation: {e}")
        page.wait_for_timeout(2000)

    # Take above-the-fold screenshot first
    page.screenshot(
        path=os.path.join(SCREENSHOTS_DIR, f"{name}_above_fold.png"),
        full_page=False
    )
    print(f"  Saved: {name}_above_fold.png")

    # Try to find the section heading and scroll to it
    heading = None
    # Try multiple selectors to find the section
    selectors = [
        f"text='{scroll_text}'",
        f"h2:has-text('{scroll_text}')",
        f"h3:has-text('{scroll_text}')",
        f":text('{scroll_text}')",
    ]

    for sel in selectors:
        try:
            elem = page.locator(sel).first
            if elem.is_visible(timeout=2000):
                heading = elem
                print(f"  Found heading with selector: {sel}")
                break
        except:
            continue

    if heading:
        # Scroll heading into view
        heading.scroll_into_view_if_needed()
        page.wait_for_timeout(500)

        # Screenshot the cards section (scroll a bit past the heading)
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, f"{name}_cards_section.png"),
            full_page=False
        )
        print(f"  Saved: {name}_cards_section.png")

        # Scroll down a bit more to see more cards
        page.mouse.wheel(0, 400)
        page.wait_for_timeout(500)
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, f"{name}_cards_scrolled.png"),
            full_page=False
        )
        print(f"  Saved: {name}_cards_scrolled.png")

        # Scroll down even more for additional cards
        page.mouse.wheel(0, 400)
        page.wait_for_timeout(500)
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, f"{name}_cards_scrolled2.png"),
            full_page=False
        )
        print(f"  Saved: {name}_cards_scrolled2.png")
    else:
        print(f"  WARNING: Could not find heading '{scroll_text}', taking full page")
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, f"{name}_fullpage.png"),
            full_page=True
        )
        print(f"  Saved: {name}_fullpage.png")

    # Also look for badge/logo images specifically
    badges = page.locator("img[src*='badge'], img[src*='logo'], img[src*='cert'], img[class*='badge'], img[class*='logo']")
    count = badges.count()
    print(f"  Found {count} badge/logo images on page")

    # Check for any elements with stacked positioning (absolute/relative with overlaps)
    stacked = page.locator("[class*='absolute'], [style*='position: absolute']")
    stacked_count = stacked.count()
    print(f"  Found {stacked_count} absolutely positioned elements")


def capture_nav_menu(page):
    """Open and screenshot the mobile navigation menu."""
    print(f"\n{'='*60}")
    print("Capturing: Mobile Navigation Menu")
    print(f"{'='*60}")

    page.goto("http://localhost:4321/", wait_until="networkidle", timeout=15000)
    page.wait_for_timeout(500)

    # Look for hamburger menu button
    hamburger_selectors = [
        "button[aria-label*='menu']",
        "button[aria-label*='Menu']",
        "button[aria-label*='nav']",
        "button[aria-label*='Nav']",
        "[class*='hamburger']",
        "[class*='menu-toggle']",
        "[class*='mobile-menu']",
        "button:has(svg)",
        "nav button",
        "header button",
    ]

    clicked = False
    for sel in hamburger_selectors:
        try:
            btn = page.locator(sel).first
            if btn.is_visible(timeout=1000):
                btn.click()
                page.wait_for_timeout(800)
                clicked = True
                print(f"  Clicked hamburger with selector: {sel}")
                break
        except:
            continue

    if clicked:
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, "09_mobile_nav_open.png"),
            full_page=False
        )
        print(f"  Saved: 09_mobile_nav_open.png")

        # Scroll down in nav if needed
        page.mouse.wheel(0, 300)
        page.wait_for_timeout(500)
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, "09_mobile_nav_scrolled.png"),
            full_page=False
        )
        print(f"  Saved: 09_mobile_nav_scrolled.png")
    else:
        print("  WARNING: Could not find hamburger menu button")
        page.screenshot(
            path=os.path.join(SCREENSHOTS_DIR, "09_mobile_nav_notfound.png"),
            full_page=False
        )


def main():
    os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": VIEWPORT_W, "height": VIEWPORT_H},
            device_scale_factor=2,  # Retina for clearer screenshots
            is_mobile=True,
            has_touch=True,
        )
        page = context.new_page()

        # Capture all pages
        for config in pages_config:
            try:
                capture_page(page, config)
            except Exception as e:
                print(f"  ERROR on {config['name']}: {e}")

        # Capture mobile nav
        try:
            capture_nav_menu(page)
        except Exception as e:
            print(f"  ERROR on nav menu: {e}")

        browser.close()

    print(f"\n{'='*60}")
    print(f"All screenshots saved to: {SCREENSHOTS_DIR}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
