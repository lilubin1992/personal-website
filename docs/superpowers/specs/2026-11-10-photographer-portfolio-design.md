# Photographer Portfolio Design

## Goal

Build a refined, understated single-page portfolio for a photographer that introduces the artist, presents a selection of work, explains pricing, and makes email contact immediate.

## Direction

Use an editorial art-direction approach: ink-black surfaces, warm white type, a single rust accent, oversized but restrained serif display type, compact sans-serif labels, and generous negative space. Photography remains the visual focus through full-bleed and offset image compositions; cards are limited to repeated pricing packages and each photo is framed as a work sample rather than a decorative card.

## Page Structure

1. Sticky navigation with the photographer name, anchor links, and a mailto contact action.
2. Hero/introduction with a short identity statement, location, primary contact action, and a large hero image.
3. Selected work with six image-led projects and category/year metadata.
4. About band with a short biography and working principles.
5. Pricing section with three clearly differentiated packages, a highlighted middle package, and a note that scope is tailored after an inquiry.
6. Contact/footer with direct email, social placeholder, location, and replacement guidance for the owner.

## Content and Asset Rules

- Use Unsplash Source URLs with stable image IDs for all photo placeholders.
- Keep all photo metadata in one typed data module so the owner can replace URLs, captions, and alt text without searching through layout code.
- Include a code comment in that module listing the intended replacement workflow and the placeholder URLs in use.
- Never use "premium" or "high-end" in visible copy.

## Interaction and Accessibility

- Navigation links use native anchors to move through the page.
- Email CTAs use `mailto:` links and have descriptive text.
- Images have meaningful alt text and explicit aspect-ratio containers to prevent layout shift.
- Use visible focus states, adequate contrast, reduced-motion handling, and responsive layouts for narrow screens.

## Implementation Boundaries

- Keep this as a single Next App Router page; no CMS, routing, forms backend, or client state is needed.
- Compose the page from focused data-driven sections in `next-app/app/page.tsx` and `next-app/app/portfolio-data.ts`.
- Put visual system styles in `next-app/app/globals.css`; keep layout classes in the page where they describe local composition.
- Update metadata and font choices in `next-app/app/layout.tsx`.

## Verification

- Run the starter's lint and production build scripts.
- Run a local dev server and inspect the page at desktop and mobile widths for overflow, broken remote images, anchor navigation, and readable text.
