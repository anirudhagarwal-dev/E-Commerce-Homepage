# SleekSelects – E‑Commerce Homepage

## Overview
- Static, responsive homepage built with `index.html`, `style.css`, and `script.js`.
- Implements the required sections: Navbar, Hero, Trending, Explore by Colors, Testimoni, Service, Blog, and Footer.

## Features
- Navbar with logo, search icon, navigation menu, wishlist icon, cart icon, and user icon.
- Hero with product/promo message and `VIEW COLLECTIONS` call-to-action.
- Trending section with product cards and heart icons for wishlist toggling.
- Explore by Colors section showcasing color options.
- Testimoni section displaying a featured review.
- Service section outlining offerings with icons.
- Blog section with a featured post and description.

## Run Locally
- Option A: Open `index.html` directly in a browser.
- Option B: Serve locally:
  - Install Node.js (if not installed).

## Project Structure
- `index.html` – Markup and section structure
- `style.css` – Styles, responsive media queries, overflow handling
- `script.js` – Mobile nav toggle, wishlist heart toggle, newsletter signup logic
- `img/` – All images and icons referenced by the site

## Implementation Notes
- Assets are referenced from `img/` (e.g., `img/image 4.png`, `img/coolicon.svg`).
- Mobile navigation toggles via the hamburger icon (`.nav-links.active`).
- Wishlist hearts toggle state; numeric count badges were removed as requested.
- Newsletter signup stores emails in `localStorage` under the `newsletterEmails` key.
- Horizontal scrollbar removed (`overflow-x: hidden`) and widths made fluid to avoid overflow.

## Design Reference
- Figma: https://www.figma.com/design/bqoVLLDtpO7OfK7G63IEa3/Task1?node-id=1-2&p=f