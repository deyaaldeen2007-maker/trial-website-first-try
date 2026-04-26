# Phase 0 Audit: Scope Lock And Content Audit

Source of truth: `/Users/deyaaaldeenaldrabee/Downloads/deya-website-codex-plan.md`

Current repo status:
- The repo is still a minimal static site with `index.html` and `README.md`.
- The current site copy (`My First Website`, `Hello World!`, `This is my first website.`) is starter content and should not be treated as launch content.
- This phase locks scope only. It does not begin the Next.js rebuild from Phase 1.

## Locked Identity

- Name: `Deya Al Drabee`
- Identity line: `Medical Student · Researcher`
- Site direction: editorial, minimal, serious, academic, content-first

## Final Page Map

| Page | Route | In Main Nav | Purpose |
|---|---|---:|---|
| Home | `/` | Yes | Editorial landing page with introduction, current focus, highlights, featured research, featured writing, and contact CTA |
| Research | `/research` | Yes | Research overview, programs, publications, impact, and academic context |
| Writing | `/writing` | Yes | Writing archive for essays, notes, and long-form posts |
| Writing Post | `/writing/[slug]` | No | Individual MDX post page |
| Talks | `/talks` | Yes | Talks archive grouped for skimming and future filters |
| Contact | `/contact` | Yes | Clear contact path and academic profile links |

## Final Navigation Labels

- `Home`
- `Research`
- `Writing`
- `Talks`
- `Contact`

## Content Status

### Real And Locked Now

- Site owner name
- Core identity line
- Final page list
- Final navigation labels
- Academic personal-site direction from the plan

### Placeholder For Launch One

| Area | Placeholder State | Replacement Needed Later |
|---|---|---|
| Hero headline | One positioning line | Final personal statement |
| Bio | Two honest editorial paragraphs | Final biography |
| Research overview | Short structured summaries | Final research descriptions |
| Publications | Sample citation-style entries | Real publications, links, and dates |
| Talks archive | Example talks grouped by year | Real talk history, venues, awards |
| Writing archive | 1 to 2 sample posts | Real essays and notes |
| Profile links | `#` placeholder values | Email, LinkedIn, ORCID, ResearchGate, Google Scholar |
| Portrait | Optional placeholder image | Final portrait in `/public/photo.jpg` later |
| Footer legal links | Placeholder labels if needed | Final privacy or other legal destinations if used |

## Placeholder Inventory

### Links To Add Later

| Link Type | Launch Phase 0 Status |
|---|---|
| Email | Placeholder |
| LinkedIn | Placeholder |
| ORCID | Placeholder |
| ResearchGate | Placeholder |
| Google Scholar | Placeholder |

### First Content To Prepare

These are the first items the build should be ready to display, using placeholders until real content is available.

| Area | First Items To Feature |
|---|---|
| Research programs | `Cosmic Enigma / Physics book`, `Clinical research`, `Active research projects` |
| Publications | 2 to 4 sample publication entries in citation format |
| Writing | 1 to 2 sample posts with category, date, description, and slug |
| Talks | 2 to 4 sample talks with title, event, location, date, type, and award state |

## Content Gaps

- No real biography is present in the repo yet.
- No real research summaries are present in the repo yet.
- No real publications or citation data are present in the repo yet.
- No talks archive or award history is present in the repo yet.
- No writing samples are present in the repo yet.
- No academic profile URLs are present in the repo yet.
- No final portrait or image assets are present in the repo yet.
- No legal link destinations are defined yet.

## Scope Decision

Phase 0 is complete when the following stay fixed for the next step:
- Main pages remain `Home`, `Research`, `Writing`, `Talks`, and `Contact`.
- Navigation labels remain identical to the page names.
- Placeholder content is allowed, but every placeholder above must stay clearly marked during the build.
- Phase 1 should begin with technical foundation work only after this audit is accepted as the scope baseline.
