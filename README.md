# TakaBlog - Personal Blog

A modern, responsive personal blog built with Next.js 15, Tailwind CSS, and shadcn/ui.

## Features

- **Home Page**: Hero section with avatar, name, bio, and social links
- **Blog Listing**: Search and filter functionality by tags
- **Blog Posts**: Markdown rendering with table of contents
- **About Page**: Personal information, skills, and contact details
- **Responsive Design**: Works on all device sizes
- **SEO Optimized**: Built-in metadata support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Markdown**: react-markdown with remark-gfm
- **Testing**: Vitest (unit tests), Playwright (E2E tests)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd takablog
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

### Building for Production

```bash
npm run build
npm start
```

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests (requires Playwright browsers)
npm run test:e2e
```

## Project Structure

```
takablog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── blog/
│   │   │   ├── page.tsx        # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Individual blog post
│   │   └── about/
│   │       └── page.tsx        # About page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, Footer
│   │   ├── blog/               # Blog components
│   │   └── home/               # Home page components
│   ├── lib/
│   │   ├── posts.ts            # Blog content loader
│   │   └── utils.ts            # Utility functions
│   └── content/
│       └── posts/              # Markdown blog posts
├── tests/
│   ├── unit/                   # Unit tests
│   └── e2e/                    # E2E tests
├── public/                     # Static assets
└── package.json
```

## Adding New Blog Posts

Create a new `.mdx` file in `src/content/posts/`:

```markdown
---
title: "My New Post"
date: "2026-03-12"
description: "A brief description"
tags: ["Tag1", "Tag2"]
---

# Your content here
```

## Deployment

Deploy to Vercel with one click:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

## License

MIT
