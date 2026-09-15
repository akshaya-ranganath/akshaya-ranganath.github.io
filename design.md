# Personal Website — Design & Content Spec

This file is the single source of truth for the site: it defines the design system (look/feel/layout) **and** holds the actual content. Edit either half freely and keep iterating on it with Claude Code — when you want the live site changed, change this file first (or just describe the change and have Claude Code update both this file and the site together).

- **Goal:** a personal academic/professional website, hosted on GitHub Pages.
- **References:** [ritwizsarma.github.io](https://ritwizsarma.github.io), [natashajha.github.io](https://natashajha.github.io)and [bishmaybarik.github.io](https://bishmaybarik.github.io) — both minimalist, text-first academic sites (Hugo/PaperMod and Jekyll respectively). We're borrowing their restraint, not copying either one wholesale.

---

## 1. Tech approach

**Recommendation: plain static HTML/CSS + a sprinkle of vanilla JS, no build step**, deployed straight from the repo's `main` branch (or `/docs`) via GitHub Pages.

Why, given the references use Hugo and Jekyll:
- Both reference sites use a static-site generator mainly for templating (shared header/nav/footer across many pages) and blog-style post lists. We don't need either — the section list below is small and fixed.
- Plain HTML/CSS is the easiest thing for Claude Code to iterate on directly with you — no toolchain, no build/deploy pipeline to debug, edits are visible immediately.
- If the site grows a lot (e.g. a real publications list that changes often, or a blog), revisit and consider Hugo (PaperMod theme, like Ritwiz's site) at that point. Easy to swap later since the content model below maps cleanly onto either.

**Repo layout (proposed):**
```
website/
  index.html          — Main page
  cv.html             — CV
  research.html       — Research Projects
  impact.html         — Social Impact & Voluntary Leadership
  geography.html           — Geography Is Cool (WIP section)
  assets/
    css/style.css
    js/main.js
    img/               — profile photo, favicons, project images
    files/cv.pdf        — downloadable CV
  design/
    design.md          — this file
```

---

## 2. Design system

### 2.1 Overall feel
Minimalist, text-first, generous whitespace, no stock photography, no heavy visual chrome. Content and clarity over decoration — same spirit as both references. A small profile header (photo + name + one-paragraph bio + social icons) up top, a flat horizontal nav below it, then page content.

### 2.2 Layout
- Single centered content column, **max-width: 720–760px**, centered with auto margins. (Both reference sites use a narrow, readable column rather than full-bleed.)
- Consistent vertical rhythm: generous section spacing (~48–64px between major sections), tighter spacing within a section (~16–24px).
- Mobile: column collapses to full width with ~24px side padding; nav wraps or becomes a horizontal scroll strip.

### 2.3 Navigation
- Flat horizontal nav, all sections one level deep (no dropdowns) — matches both references' "no nested menus" approach.
- Section labels in **lowercase**, `snake_case` or single words (`cv`, `research`, `social impact`, `geography is cool`) — a deliberate, slightly playful stylistic borrow from Bishmay's site. (Swap to normal Title Case if that reads as too cute for your taste — flag it and we'll change the CSS/labels in one pass.)
- Active page indicated with an underline or bold weight, not a background pill.
- Nav sits directly under the profile header on every page (i.e. it's global chrome, not just a homepage element).

### 2.4 Color
Light mode primary, with dark-mode support via `prefers-color-scheme` (both references support light/dark toggle — worth keeping).

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#ffffff` | `#1b1b1e` | page background |
| `--fg` | `#2e2e33` | `#e6e6e6` | body text |
| `--fg-muted` | `#6b6b70` | `#a0a0a5` | secondary text, dates, captions |
| `--accent` | `#2e2e33` | `#e6e6e6` | links, active nav (kept neutral — no bright brand color) |
| `--border` | `#e6e6e6` | `#2f2f33` | hairline dividers |

`#2e2e33` (a near-black charcoal) is lifted directly from Ritwiz's `theme-color` meta tag — a deliberate anchor point rather than a random pick. No accent color beyond charcoal/gray for now; if you want a signature color later (for links, headings, etc.) this is the place to add it.

### 2.5 Typography
- System font stack for speed and native feel: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- Body text: 16–18px, line-height ~1.6.
- Headings: same font family, weight 600–700, restrained size jumps (h1 ~2rem, h2 ~1.4rem, h3 ~1.1rem) — no decorative display font.
- Monospace (`ui-monospace, SFMono-Regular, Menlo, monospace`) reserved for things like nav labels if we keep the snake_case treatment, or code/data callouts in the Maps section.

### 2.6 Components
- **Profile header** (appears on the homepage; a smaller/compact version on inner pages): circular profile photo (~160px on home, ~64px on inner pages), name as H1, one-paragraph bio underneath.
- **Social icon row**: simple line-icon links (email, GitHub, LinkedIn, ORCID/Google Scholar if relevant, CV download) directly under the bio, styled as plain currentColor SVGs — no colored brand icons.
- **Section list item** (used for CV entries, research projects, impact activities): title (bold), subtitle/org (muted), date range (muted, right-aligned or on its own line on mobile), optional 1–3 line description, optional link out.
- **Card** (optional, for Research Projects / Maps): a bordered block (hairline `--border`, ~8px radius, ~20px padding) — used sparingly, only where a grid of distinct items (e.g. project thumbnails) actually helps scanning; the CV and Impact sections should stay as plain lists, not cards.
- **Footer**: small, muted, centered — social icons repeated + "Built with [static HTML / Hugo] · source on GitHub" line, echoing both references' minimal Hugo/Jekyll credit footer.

### 2.7 What we are explicitly avoiding
- No hero images/banners, no carousels, no animation beyond subtle hover states and smooth-scroll anchors.
- No multi-column dashboard-style homepage.
- No third-party UI framework (Bootstrap/Tailwind component kits) — plain CSS keeps this easy to hand-edit.

---

## 3. Site map / sections

1. **Main page** (`index.html`) — profile header, bio, social links, maybe a short "currently" line and recent-updates list (borrowed from Ritwiz's "Updates" idea) if you want the homepage to feel alive.
2. **CV** (`cv.html`) — structured, scannable CV content on the page itself (education, positions, etc.) plus a **Download PDF** link/button.
3. **Research Projects** (`research.html`) — list or light card grid of research projects/publications, each with title, collaborators, venue/status, short abstract, links (paper/code/data).
4. **Social Impact and Voluntary Leadership** (`impact.html`) — split into two separately-labeled sections, "Social Impact" and "Voluntary Leadership"; each entry has a title and description.
5. **Geography Is Cool** (`geography.html`) — placeholder section for now (see §4.5). Keep it in the nav as a stub page ("more coming soon") rather than hiding it, so the structure is ready whenever the idea firms up.

---

## 4. Content

Fill in the bracketed placeholders below whenever you're ready — this doubles as the content source Claude Code should pull from when building/updating the actual HTML.

### 4.1 Main page

- **Name:** [Full Name: Akshaya Ranganath]
- **Photo:** [Path to profile photo: Desktop/_website/assets/_img/professional_photo.jpg]
- **One-line title/role:** [e.g. "Researcher at ___ / PhD candidate at ___"]
- **Bio (1 short paragraph):** Hello! Welcome to my page, I am a social impact practitioner turned researcher interested in the impact of geopolitical shocks on environment and welfare, financial inclusion and policy outcomes.
- **Social/contact links:** [[email](mailto:ranganathakshaya99@gmail.com)]· [[GitHub](https://github.com/akshaya-ranganath)] · [[LinkedIn\]](https://www.linkedin.com/in/akshaya-ranganath-74b4611b2/)] · [Google Scholar / ORCID] · [Twitter/X, optional]
- **Optional "Updates" list** (recent talks, papers, roles — newest first): [ ]

### 4.2 CV

- **Downloadable file:** Desktop/_website/assets/_files/cv.pdf — 

### 4.3 Research Projects

Organized into four subsections (in this order): Working Papers, Articles in Popular Press, Policy Reports, Work in Progress. Each entry has a title, collaborators (linked to their personal sites where known), venue/date if applicable, and an **Abstract toggle** that expands inline to show the abstract (currently a "coming soon" placeholder for every entry — fill in real abstract text as it's ready).

Visually, this page (and CV, Social Impact, and Geography Is Cool) uses a font/color scheme inspired by a colleague's site (natashajha.github.io/research.html) instead of the site-wide look defined in §2 — Cormorant Garamond serif for titles/blockquotes, DM Sans for body text, a warm cream background (`#f7f2e9`), warm brown text (`#33291f`/`#8c7a63` muted), and green/gold accents. The home page also uses this same color scheme now (background/text/accent colors), but keeps the **original system font** rather than DM Sans/Cormorant Garamond — `index.html` links `research-theme.css` for the colors, then has a small inline override resetting `body` back to the system font stack. The override lives in `assets/css/research-theme.css`, linked on every page. (First pass at the palette used colors too close to the original neutral tones to read as different — warmed them up further after that feedback.)

**Co-author links:**
- Dr. Shreya Bhattacharya — https://sites.google.com/view/shreyabeconomics/
- Dr. Sankalp Mathur — https://www.sankalpmathur.com/home
- Dr. Arpita Chakravorty — https://sites.google.com/view/achakravorty/ (name spelling corrected from an earlier "Charavorty" typo)
- Dr. Natasha Jha — https://natashajha.github.io (co-author on the Policy Reports entry, alongside Dr. Shreya Bhattacharya)

**Working Papers**
- *Are Exporting Firms More Productive? Evidence from India's Export Contraction Period* — [link/status TBD]

**Articles in Popular Press**
- *Pension Reforms in India* — The Hindu, December 8, 2025 — with Dr. Shreya Bhattacharya — [thehindu.com/data/the-evolution-of-pension-reforms-in-india/article70375016.ece](https://www.thehindu.com/data/the-evolution-of-pension-reforms-in-india/article70375016.ece)

**Policy Reports**
- *Beyond Access: Developing a Vulnerability Index Matrix* — with Dr. Natasha Jha and Dr. Shreya Bhattacharya — Centre for Advanced Financial Research and Learning (CAFRAL) & Financial Inclusion and Development Department, Reserve Bank of India (FIDD, RBI) — [link/date TBD]

**Work in Progress**
- *Environmental Impacts of Suez Canal Closure* — with Dr. Sankalp Mathur
- *Health Outcomes for Pensioners in India* — with Dr. Shreya Bhattacharya and Dr. Arpita Chakravorty

### 4.4 Social Impact and Voluntary Leadership

The page (`impact.html`) opens with a personal intro (in your own voice, as a blockquote), then splits into two separate sections: **Social Impact** and **Voluntary Leadership**. Each entry within a section uses the "paper" title/description format shared with the Research page (serif title, plain description) rather than a plain list item.

**Intro copy (blockquote, above both sections):**
> Hi, welcome to my passion page! When I was 15, I gathered some 30-odd people who had similar thoughts as me and founded a local non-profit organisation. That organisation still stands with over 120 members, and I'd like to show you some cool stuff I've gotten to lead over the years!
>
> This journey has built my foundation and interest in development economics, and I hope you get some ideas from here too!

**Social Impact:**

1. **#SHIKSHA** — A free, for-all-ages basic Math and English program for the underprivileged. The first student was our watchman, who'd look after the building we took meetings in! Change starts from within :)

2. **Joy of Giving** — A recurring initiative collecting clothes, utensils, toys, and other donations around our residential suburb, checking them for quality, and distributing them in a select village each year. At its largest scope, this project distributed three busses' worth of items across a population of 500+ people.

- (add more Social Impact entries as needed, same format: name, 1–3 sentence description)

**Voluntary Leadership:** — no entries yet; currently a placeholder ("Add entries here as they come together.") until content is ready.

### 4.5 Geography Is Cool (work in progress)

Idea still forming — placeholder page for now. Notes so far: [dump whatever the idea currently is — e.g. "interactive map of fieldwork sites", "maps used in research", "travel map" — once this is clearer we'll design this section properly rather than force it into the list/card pattern above].

---

## 5. Open questions / decisions to revisit

- [ ] Confirm tech approach (plain HTML vs. Hugo) — see §1.
- [ ] Confirm nav label style (lowercase snake_case vs. Title Case) — see §2.3.
- [ ] Decide what the Geography Is Cool section actually is once the idea is further along.
- [ ] Decide whether homepage includes an "Updates" feed or stays purely static bio.
