# Imam Syafii — Portfolio

A portfolio for Imam Syafii, built with Next.js 16, React 19, TypeScript, and plain CSS.

## Local setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in a browser.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Architecture

The App Router page is server-rendered by default. Client JavaScript is limited to the mobile navigation and accessible project filtering. CV-derived identity, skills, experience, education, and language content is typed in `data/profile.ts`. The 23-card gallery is typed in `data/projects.ts` and supports local screenshots, image pairs, and local MP4 video from `public/images/projects/`.

## Privacy

The published site omits phone numbers, full addresses, dates of birth, private or external raw IP addresses, internal or private service endpoints, and sensitive implementation details. The source CV is not copied into `public/`. Fourteen gallery files use explicit `-sanitized` filenames alongside existing in-place sanitized replacements. Together they are safe portfolio assets; legacy sensitive originals have been removed from `public/`.

## Deployment

Run a production build before deploying to a Next.js-compatible host. A Git remote may be configured for source collaboration, but no production deployment URL is declared in the application metadata or this repository.
