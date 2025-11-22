# Appscrip Task - Sahil

A Product Listing Page (PLP) built with Next.js 14, featuring Server-Side Rendering (SSR), responsive design, and SEO optimization.

## Features

- ✅ **Server-Side Rendering (SSR)** - Using Next.js App Router with async components
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **SEO Optimized** - Meta tags, structured data (Schema.org), semantic HTML
- ✅ **Product Filtering** - Filter by category, search, and sort options
- ✅ **Mock API Integration** - Uses [FakeStore API](https://fakestoreapi.com/)
- ✅ **Minimal Dependencies** - Only essential packages (Next.js, React)
- ✅ **Clean Code Structure** - Modular components with CSS modules

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **API**: FakeStore API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/appscrip-task-sahil.git
cd appscrip-task-sahil
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
appscrip-task-sahil/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main PLP page (SSR)
│   └── globals.css          # Global styles
├── components/
│   ├── ProductListingPage.tsx      # Main PLP component
│   ├── ProductListingPage.module.css
│   ├── ProductCard.tsx             # Product card component
│   ├── ProductCard.module.css
│   ├── ProductFilters.tsx          # Filter component
│   └── ProductFilters.module.css
├── lib/
│   └── api.ts               # API utilities
├── next.config.js           # Next.js configuration
├── netlify.toml             # Netlify deployment config
└── package.json
```

## SEO Features

- **Page Title**: "Product Listing Page - Shop Our Collection"
- **Meta Description**: Optimized description for search engines
- **H1 Tag**: Main page heading
- **H2 Tags**: Section headings for product categories
- **Schema Markup**: JSON-LD structured data for CollectionPage and Product items
- **Image Alt Text**: Descriptive alt text for all product images
- **Semantic HTML**: Proper use of article, section, and header tags

## Responsive Breakpoints

- **Desktop**: 1400px max-width container
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect Next.js and deploy
4. The `netlify.toml` file is already configured

### Manual Build

```bash
npm run build
npm start
```

## Code Quality

- **Naming Convention**: camelCase for variables/functions, PascalCase for components
- **Code Structure**: Modular components with separation of concerns
- **Minimal Dependencies**: Only Next.js and React (no UI libraries)
- **Optimized DOM**: Efficient component structure with minimal nesting
- **TypeScript**: Full type safety throughout the application

## API Integration

The application fetches products from [FakeStore API](https://fakestoreapi.com/):
- Endpoint: `https://fakestoreapi.com/products`
- Data is fetched server-side for optimal SEO and performance
- Includes error handling and fallback states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for evaluation purposes.



