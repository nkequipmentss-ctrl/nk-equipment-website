# NK Equipments Solution Website

## Architecture

- TanStack Start provides the React application shell and file-based routing.
- Netlify's TanStack Start adapter handles deployment and server rendering.
- The website is currently a focused single-page corporate experience at `src/routes/index.tsx`.
- Global styling, responsive layouts, animation, and design tokens live in `src/styles.css`.
- Netlify Forms handles all lead capture without custom server functions.

## Key Directories

- `src/routes/` — page routes and root document metadata.
- `public/` — static assets and the Netlify Forms detection skeleton.
- `.netlify/` — Netlify project metadata and generated task summaries.

## Conventions

- Use PascalCase for React components and camelCase for data and helpers.
- Keep repeated content in typed arrays near the top of the route file.
- Use existing CSS custom properties for color and typography changes.
- Preserve the dark industrial visual language: black steel surfaces, orange primary actions, green trust accents.
- Use Lucide icons instead of drawing new inline SVG icons.
- Keep interactions accessible with labels, focus states, semantic sections, and reduced-motion support.

## Forms

- Interactive forms submit to `/__forms.html` using URL-encoded POST requests.
- Every form field must also exist in `public/__forms.html` so Netlify detects it at build time.
- Form names must remain synchronized between React and the static skeleton.
- Honeypot fields are required for spam protection.

## Non-obvious Decisions

- Inventory is presentation data for the initial marketing launch; it is not a persistent stock-management system.
- Contact details and social destinations are launch placeholders until the company supplies official values.
- Remote image URLs are optimized through Unsplash query parameters and use lazy loading outside the hero.
- Do not add a database unless inventory editing, user accounts, or another persistent workflow is requested.

## Local Development

- Install dependencies with `pnpm install`.
- Run locally with `pnpm dev`.
- Create a production bundle with `pnpm build` when normal project rules allow validation.
