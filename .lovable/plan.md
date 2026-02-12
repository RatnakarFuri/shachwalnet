

# Shachwal Net – ISP Website Plan

## Overview
A minimal, modern, fully responsive single-page website for **Shachwal Net** (Shachwal Solutions Private Limited), an Internet Service Provider serving Banjar, Jibhi & Tirthan in Himachal Pradesh. Pure white background, clean corporate design, no gradients or heavy animations.

**Brand Colors:** Primary `#1F3374` (headings, footer) · Accent `#F6A728` (CTAs, highlights)

---

## Sections (in order)

### 1. Sticky Header
- Logo (uploaded `logo.png`, ~45px height) on the left
- Navigation links: Home, Plans, Coverage, About, Contact
- Orange "Get Connection" CTA button
- White background with subtle bottom border, stays fixed on scroll

### 2. Hero Section
- Two-column layout (stacks on mobile)
- Left: "Always Fast. Always Connected." headline + subheadline about broadband in Banjar/Jibhi/Tirthan + two buttons (orange primary, blue outline secondary)
- Right: Professional stock image related to broadband/connectivity (16:9, rounded 8px)

### 3. Plans & Pricing
- Section title + subtitle
- Clean pricing table (desktop) / stacked cards (mobile) showing 5 speed tiers (25–300 Mbps) across 4 durations (1 month, 3 months, 6 months, 12 months)
- Bonus months highlighted in orange for qualifying plans
- Plan details note (unlimited data, bonus info)
- Centered "Get New Connection" CTA

### 4. Why Choose Us
- 6-item icon grid with Lucide icons
- Affordable Plans, High-Speed Network, Local Presence, Transparent Pricing, Quick Installation, Dedicated Support
- Airy spacing, minimal design

### 5. Coverage
- "Currently Serving" title with Banjar, Jibhi, Tirthan listed
- Landscape/coverage image (16:9, rounded)
- Expansion message text below

### 6. About
- "About Shachwal Net" with 3 paragraphs about the company, mission, and services

### 7. Contact
- "Get Connected Today" title
- Two-column: contact details (Head Office, Site Office, email, phone numbers) + contact form (Name, Mobile, Area, Message) with "Apply for New Connection" button
- Mobile-friendly stacked layout

### 8. Footer
- Dark blue (`#1F3374`) background, white text
- Three columns: Logo + brand info | Navigation links | Contact details
- Bottom bar with copyright © 2026 and "Designed by Furi Global" link

### 9. Legal Accordion (below footer)
- Two expandable accordions: Privacy Policy & Terms & Conditions
- Smooth animation, clean styling

## Technical Details
- SEO title and meta description set in `index.html`
- Local Business JSON-LD schema markup
- Smooth scrolling enabled
- Lazy-loaded images
- 80px section padding (desktop), 50px (mobile)
- Uploaded logo copied to `src/assets/logo.png`
- No backend needed – purely static frontend
- Professional stock images from Unsplash for hero, coverage, and other sections

