# Imam Syafi'i — Portfolio

A privacy-conscious portfolio built with Next.js 16, React 19, TypeScript, and plain CSS.

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

The App Router page is server-rendered by default. Client JavaScript is limited to the mobile navigation and project filtering. Project content lives in `data/projects.ts`; visual styling and all abstract project artwork live in `app/globals.css`.

## Privacy

Only a profile portrait and decorative hero image are published. Project screenshots were intentionally excluded because they contained personal or internal operational data. The six project cards use CSS-native abstract visuals instead. The site also omits phone numbers, birth details, exact addresses, raw IPs, and infrastructure details.

## Deployment

Run a production build before deploying to a Next.js-compatible host. No production URL, Git remote, or deployment target is configured yet.
