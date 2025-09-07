# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal website for GeekBeard, hosted on GitHub Pages. The site features a minimalist dark theme with ASCII art header and serves as a platform for thoughts and reflections.

## Architecture

**Jekyll Static Site Structure:**
- `_config.yml` - Jekyll configuration with kramdown markdown and GFM input
- `_layouts/` - HTML templates using Liquid templating
  - `defaults.html` - Main site layout with dark theme CSS and responsive design
  - `article.html` - Article page template extending the default layout
- `thoughts/` - Markdown files for blog posts/articles with YAML front matter
- `index.html` - Homepage with hardcoded ASCII art header and article links
- `public/` - Static assets directory

**Key Design Elements:**
- Dark theme with CSS variables (--bg:#000, --fg:#fff, --accent:#ff4141)
- Responsive ASCII art header that scales with viewport
- Minimal styling using system fonts
- Mobile-first responsive design with specific breakpoints for ASCII art

## Development Commands

This is a Jekyll site that can be served locally using:

```bash
# Install Jekyll and dependencies (if not already installed)
gem install jekyll bundler

# Serve the site locally with auto-reload
jekyll serve

# Build the site for production
jekyll build
```

For GitHub Pages deployment, simply push to the main branch - no build commands needed as GitHub handles Jekyll compilation automatically.

## Content Management

**Adding New Posts:**
1. Create new `.md` files in the `thoughts/` directory
2. Include YAML front matter with `layout: article`, `title`, and optional `description`
3. Content is written in Markdown with kramdown/GFM support
4. Manually add links to new posts in `index.html` (no automatic post generation)
5. Ensure the Jekyll permalink structure `/thoughts/:title/` matches the links in index.html

**Layout Inheritance:**
- Posts use `layout: article` which extends the `default` layout
- The default layout provides the site-wide styling, header, and footer
- Article layout adds the post title, description, and back navigation

## Important Notes

- This repository contains a README.md that appears to be from a different project (mentions Lovable, React, TypeScript) - this should be ignored as it doesn't match the actual Jekyll codebase
- The site uses a custom permalink structure: `/thoughts/:title/`
- Manual ASCII art header requires careful editing to maintain alignment
- Color scheme is hardcoded in the default layout CSS