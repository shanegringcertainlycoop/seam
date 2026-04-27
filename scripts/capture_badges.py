from playwright.sync_api import sync_playwright
import os

SCREENSHOTS_DIR = "/Users/shanegring/ClaudeCode/SEAM/screenshots"
VIEWPORT = {"width": 390, "height": 844}

pages = [
    {
        "url": "http://localhost:4321/",
        "name": "home",
        "scroll_text": "What we offer",
        "description": "Home - What we offer product cards",
    },
    {
        "url": "http://localhost:4321/for/operators",
        "name": "operators",
        "scroll_text": "Your toolkit",
        "description": "Operators - Your toolkit product cards",
    },
    {
        "url": "http://localhost:4321/for/building-professionals",
        "name": "building-professionals",
        "scroll_text": "Your toolkit",
        "description": "Building Professionals - Your toolkit product cards",
    },
    {
        "url": "http://localhost:4321/community",
        "name": "community",
        "scroll_text": "Choose your path",
        "description": "Community - Choose your path membership cards",
    },
]

def capture_page(page_info, browser):
    page = browser.new_page(viewport=VIEWPORT)
    print(f"\n--- {page_info['description']} ---")
    print(f"Navigating to {page_info['url']}...")
    page.goto(page_info["url"], wait_until="networkidle", timeout=30000)

    # Find the section heading and scroll to it
    heading_text = page_info["scroll_text"]

    # Try to find the heading element
    heading = None
    for selector in [
        f"h2:has-text('{heading_text}')",
        f"h3:has-text('{heading_text}')",
        f"text='{heading_text}'",
    ]:
        try:
            el = page.locator(selector).first
            if el.is_visible(timeout=3000):
                heading = el
                print(f"Found heading with selector: {selector}")
                break
        except:
            continue

    if heading:
        # Scroll the heading into view, then scroll up a bit to see context
        heading.scroll_into_view_if_needed()
        page.wait_for_timeout(500)

        # Get the heading's position
        bbox = heading.bounding_box()
        if bbox:
            # Scroll so the heading is near the top of viewport
            page.evaluate(f"window.scrollTo(0, window.scrollY + {bbox['y']} - 40)")
            page.wait_for_timeout(500)
    else:
        print(f"WARNING: Could not find heading '{heading_text}', taking full page screenshot")

    # Capture the visible viewport (above-the-fold from current scroll position)
    output_path = os.path.join(SCREENSHOTS_DIR, f"mobile_{page_info['name']}_cards.png")
    page.screenshot(path=output_path, full_page=False)
    print(f"Saved: {output_path}")

    # Also scroll down a bit more to capture additional cards below the fold
    page.evaluate("window.scrollBy(0, 700)")
    page.wait_for_timeout(500)
    output_path2 = os.path.join(SCREENSHOTS_DIR, f"mobile_{page_info['name']}_cards_scrolled.png")
    page.screenshot(path=output_path2, full_page=False)
    print(f"Saved: {output_path2}")

    # Try to find badge elements and report their properties
    badges = page.locator("[class*='badge'], [class*='Badge'], img[class*='logo'], img[alt*='badge'], img[alt*='logo']")
    badge_count = badges.count()
    print(f"Found {badge_count} badge/logo elements on page")

    # Look for product cards more broadly
    cards = page.locator("[class*='card'], [class*='Card']")
    card_count = cards.count()
    print(f"Found {card_count} card elements on page")

    page.close()

def main():
    os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()

        for page_info in pages:
            try:
                capture_page(page_info, browser)
            except Exception as e:
                print(f"Error capturing {page_info['name']}: {e}")

        browser.close()

    print("\n--- Done! All screenshots saved. ---")

if __name__ == "__main__":
    main()
