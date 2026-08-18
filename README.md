# Portfolio — Luana Vallejos

Terminal-inspired personal portfolio built with [Next.js](https://nextjs.org/) (App Router), React, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the development server    |
| `npm run build` | Production build + type-check   |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |

## Structure

```
app/            Root layout, global styles and the single page
components/     Terminal UI (window chrome, prompt lines, sections)
lib/            personalInfo.ts — all portfolio content lives here
types/          Content model shared by the components
```

All the content (profile, stack, experience, projects, education, hobbies) is edited in `lib/personalInfo.ts`; the components render whatever that file exports. Theme colors and terminal effects are defined in `app/globals.css`.
