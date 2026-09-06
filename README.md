# Oudaa

Landing page for **Oudaa** — a community fund management platform for HOAs, residential communities, and member-based organizations. Oudaa replaces cash boxes, WhatsApp groups, and personal spreadsheets with a single, auditable system for dues, shared funds, capital projects, and committee governance.

Built with Next.js, Tailwind CSS, and shadcn/ui.

## Key Capabilities

- **Self-verified bank payments** — residents submit a transaction ID and Oudaa cross-checks it against the actual bank/mobile-money provider (CBE, Telebirr, Dashen, Bank of Abyssinia, CBE Birr, M-Pesa)
- **Append-only ledger** — a permanent, non-editable Payment/Expense record per community
- **Multi-party approvals** — sensitive changes (bank details, fee amounts, committee seat transfers) require sign-off from more than one committee member
- **Full audit log** — every meaningful action is recorded and visible to the committee
- **Role-based access** — ADMIN (committee) and RESIDENT roles, scoped per community

## Getting Started

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view it.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — lint the codebase

## Project Structure

```
app/                  # Next.js app router pages
components/
  sections/           # Landing page sections (hero, problem, solution, features, pricing, FAQ, etc.)
  ui/                 # shadcn/ui components
  navbar.tsx
  dashboard-preview.tsx
public/                # Static assets
```

## License

© 2026 Oudaa. All rights reserved.
