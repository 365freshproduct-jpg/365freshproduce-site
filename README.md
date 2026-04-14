# AUREN Greenhouse Systems

Premium Next.js frontend for a turnkey industrial greenhouse construction company.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- SMTP-ready lead form endpoint with Nodemailer

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and set your SMTP credentials:

```bash
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
REQUEST_TO_EMAIL=
```

If SMTP is not configured, the API route still accepts the form and logs the lead on the server so the frontend flow remains testable.

## Content architecture

- Main structured content: `lib/site-data.ts`
- Main page composition: `components/site-shell.tsx`
- Lead form: `components/lead-form.tsx`
- Projects filter: `components/projects-tabs.tsx`

The site is routed through `/en`, `/ru` and `/hy`, with English content currently serving as the primary source and fallback for future localization.
