# Deployment And Content Handoff

## Deployment

- Framework: `Next.js 14`
- Runtime: Node `20+`
- Build command: `npm run build`
- Start command: `npm run start`
- Recommended host: `Vercel`
- Optional production URL env var: `NEXT_PUBLIC_SITE_URL`

If deployed on Vercel:
- The stable Vercel project URL will be used automatically when `NEXT_PUBLIC_SITE_URL` is not set.
- Set `NEXT_PUBLIC_SITE_URL` to the final production domain once a custom domain is chosen.

## Where To Edit Content

- Bio and homepage intro:
  [src/app/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/page.tsx)

- Research overview, program blocks, publication placeholders, and impact:
  [src/app/research/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/research/page.tsx)

- Talks archive entries:
  [src/app/talks/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/talks/page.tsx)

- Contact email and academic profile links:
  [src/app/contact/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/contact/page.tsx)
  [src/lib/site.ts](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/lib/site.ts)

- Writing posts:
  [src/content/posts](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/content/posts)

- Writing post parsing, sorting, and metadata behavior:
  [src/lib/posts.ts](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/lib/posts.ts)

## How To Add A New Writing Post

1. Create a new `.mdx` file in [src/content/posts](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/content/posts).
2. Add frontmatter with:
   - `title`
   - `date`
   - `category`
   - `description`
   - `slug`
3. Write the MDX body below the frontmatter.
4. The archive and single-post route will pick it up automatically.

## Placeholder Items To Replace

- Email placeholder in [src/app/contact/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/contact/page.tsx)
- Academic profile placeholders in [src/app/contact/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/contact/page.tsx)
- Footer placeholder links in [src/lib/site.ts](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/lib/site.ts)
- Research publication placeholders in [src/app/research/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/research/page.tsx)
- Talks sample entries in [src/app/talks/page.tsx](/Users/deyaaaldeenaldrabee/trial-website-first-try/src/app/talks/page.tsx)

## Image Assets

- No final portrait is wired in yet.
- When ready, add image assets under a future `public/` directory and update the relevant page components.
