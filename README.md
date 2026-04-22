# Mahmoud Adel — Portfolio

A professional portfolio site for **Mahmoud Adel Eid Khalifa**, Embedded Systems Engineer.

Built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js** (react-three-fiber + drei).

## Features

- Interactive 3D hero (Three.js particle field + circuit glow)
- Scroll-triggered animations throughout (Framer Motion)
- Projects grid with category filter, staggered animations, and dedicated detail pages for each project (`/projects/[slug]`)
- Working contact form with **Resend** email delivery (falls back to mailto when unconfigured)
- Copy-to-clipboard on contact cards (email, phone, LinkedIn)
- Fully responsive, mobile-first, accessible (skip link, semantic landmarks, keyboard focus states)
- Custom "MA" SVG favicon, social OG meta, reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure the contact form (optional)

Copy `.env.local.example` to `.env.local` and fill in:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=MahmoudAdelll154@gmail.com
```

Get a free API key at https://resend.com. If these aren't set, the form simply falls back to opening the visitor's mail client with a pre-filled message.

## Build & deploy

```bash
npm run build
npm start
```

Easiest deployment: push to GitHub and import the repo into [Vercel](https://vercel.com) — it detects Next.js automatically. Add the two env vars in the Vercel dashboard.

## Editing your content

All content lives in two files so you never have to touch component code:

- **`src/data/profile.ts`** — name, title, contact info, experience timeline, skills, tools, education, languages.
- **`src/data/projects.ts`** — featured projects (each gets its own detail page) + the "more projects" teaser list.

Add a new project by appending an object to the `projects` array with a unique `slug`. The grid, filter, and detail page are generated automatically.

Your CV PDF is served from `public/Mahmoud_Adel_CV.pdf`.

## Project structure

```
src/
├── app/
│   ├── api/contact/route.ts      # Resend-backed email endpoint
│   ├── projects/[slug]/page.tsx  # Dynamic project detail pages
│   ├── layout.tsx                # Root layout + fonts + metadata
│   ├── page.tsx                  # Home page composing all sections
│   ├── not-found.tsx             # 404 page
│   └── globals.css
├── components/
│   ├── sections/                 # Hero, About, Experience, Projects, Skills, Education, Contact
│   ├── ui/                       # Button, Badge, SectionHeading
│   ├── navbar.tsx, footer.tsx
│   ├── hero-3d.tsx               # react-three-fiber Canvas
│   └── project-icon.tsx
├── data/
│   ├── profile.ts
│   └── projects.ts
└── lib/utils.ts
```
