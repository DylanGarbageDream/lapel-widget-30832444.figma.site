<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
### [2026-03-06] — Merged Web Design into Digital Marketing & Updated Carousel
- Merged Web Design service into Digital Marketing in `src/sections/Services/components/ServiceGrid.tsx`
- Replaced testimonial carousel with product image carousel in `src/sections/Testimonials/components/TestimonialCarousel.tsx`
- Added three product images (Torco oils, race car interior, engine bay) to carousel

### [2026-03-06] — Removed Portfolio Section
- Removed Portfolio import and section from `src/App.tsx`
- Removed Portfolio link from `src/sections/Navbar/components/NavbarLinks.tsx`
- Removed Portfolio link from `src/sections/Footer/components/FooterContent.tsx`
- Removed "View Our Work" button from `src/sections/Hero/components/HeroButtons.tsx`

### [2026-03-05] — Added Third Instagram Post with Detailing Spray
- Added third post with Meguiar's detailing spray image in `src/sections/InstagramFeed/components/InstagramMockup.tsx`

### [2026-03-05] — Updated Second Instagram Post to M/T Wheel
- Replaced second post image with M/T wheel photo in `src/sections/InstagramFeed/components/InstagramMockup.tsx`

### [2026-03-05] — Updated Second Instagram Post Image
- Replaced second post image with WARN winch photo in `src/sections/InstagramFeed/components/InstagramMockup.tsx`

### [2026-03-05] — Reduced Instagram Feed to 2 Posts
- Removed third post from `src/sections/InstagramFeed/components/InstagramMockup.tsx`

### [2026-03-05] — Added Suspension Image to Instagram Feed
- Replaced first Instagram post image with King Shocks suspension photo in `src/sections/InstagramFeed/components/InstagramMockup.tsx`

### [2026-03-05] — Instagram Caption Spacing Fix
- Added space between username and caption in `src/sections/InstagramFeed/components/InstagramPost.tsx`

### [2026-03-05] — Full Animation & Interactivity Implementation
- Added custom hooks: `src/hooks/useInView.ts` (scroll detection), `src/hooks/useCountUp.ts` (number animation)
- Updated Navbar with mobile hamburger menu, scroll-based background, smooth scroll links
- Added entrance animations to Hero, staggered reveals to Services/Portfolio/About/Values grids
- Implemented functional contact form with validation states in `src/sections/Contact/components/ContactForm.tsx`
- Extended `tailwind.config.js` with fade-in, slide-in, scale-in keyframes; added animation delay utilities to `tailwind.css`
</changelog>
