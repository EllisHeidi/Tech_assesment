# Kingsley Village — Palm Lakes

Marketing site for Kingsley Village, a 49-home sectional title development within the Palm Lakes estate on South Africa's KZN North Coast. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Project structure

```
/
├── public/                  Static assets served as-is (favicons, brochure PDF)
├── src/
│   ├── assets/              Images, logos, and PDFs processed through Astro's image pipeline
│   ├── components/          Nav, Hero, Footer
│   ├── layouts/              Shared page shell (Layout.astro)
│   ├── pages/                One file per route:
│   │   ├── index.astro         Home
│   │   ├── units.astro         Unit types, pricing, floor plans
│   │   ├── location.astro      Location & lifestyle
│   │   ├── invest.astro        Investment case
│   │   ├── about.astro         About the development
│   │   └── contact.astro       Contact form
│   └── styles/               Global CSS (Tailwind)
└── package.json
```

Videos are streamed from Cloudinary rather than bundled locally.

## Running locally

Requires Node.js 22.12+.

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

| Command           | Action                                        |
| :----------------- | :--------------------------------------------- |
| `npm install`      | Install dependencies                           |
| `npm run dev`      | Start the local dev server                     |
| `npm run build`    | Build the production site to `./dist/`         |
| `npm run preview`  | Preview the production build locally           |

## Deployment

The site is deployed to [Vercel](https://vercel.com) as a static build (`npm run build`).

## Notes

- The contact form (`/contact`) submits via a `mailto:` link — it opens the visitor's email client with the message pre-filled rather than posting to a backend, since this is a static site with no server.
