# Apex Energy — Premium Energy Drink E-Commerce Site

A production-quality, fully responsive React storefront inspired by dark, neon-green,
extreme-sports-meets-streetwear energy drink branding. Built with React + TypeScript +
Vite + Tailwind CSS.

> **Branding note:** This is an original demo brand ("Apex Energy") inspired by the
> visual language of premium energy-drink brands. It does not use any real company's
> name, logo, or product photography — all product art is generated at runtime via the
> `ProductCan` SVG component so the project has zero dependency on external or
> copyrighted image assets. Swap in real photography later by replacing `<ProductCan>`
> usages with `<img>` tags once you have licensed assets.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    layout/       Navbar, MobileMenu, SearchOverlay, Footer, Toast
    hero/         Homepage hero
    products/     ProductCard, ProductGrid, filters/sort, gallery, energy profile, etc.
    cart/         CartDrawer, CartItem, ShippingProgress
    checkout/     CheckoutForm, OrderSummary
    sections/     CategorySection, BestSellers, CultureSection, AthleteSection,
                   LimitedEditionSection, NewsletterForm
    ui/           SectionHeading, ambient background effects
  pages/          Home, Shop, ProductDetails, Cart, Checkout, Merch, About, Search
  data/           Mock product & merch catalog (data/products.ts)
  hooks/          Cart, Wishlist, and Toast context providers (localStorage-backed)
  lib/            Small shared utilities
  types/          Shared TypeScript types
```

## Features implemented

- Sticky, scroll-aware navbar with animated mobile menu and full-screen search overlay
- Cinematic animated homepage hero, category discovery grid, best sellers, culture/
  lifestyle tiles, athlete spotlight, and a limited-edition drop with a live countdown
- Full shop page with working client-side filtering (category, flavor, sugar, caffeine,
  price) and sorting (featured, best selling, newest, price)
- Product detail pages with an image "gallery" (generated can art), quantity selector,
  wishlist, energy profile meters, and tabbed description/ingredients/nutrition/reviews
- Cart system (context + localStorage): add/remove/increment/decrement/clear, slide-out
  drawer, free-shipping progress bar, dedicated cart page
- 4-step checkout flow (Information → Delivery → Payment → Confirmation) with inline
  validation and a mock order confirmation — no real payment is processed
- Merch/streetwear page with category filtering
- About page with FAQ, shipping/returns, terms, careers, and store-locator sections
  (all footer links resolve to a real anchor)
- Toast notifications, reduced-motion support, keyboard-accessible focus states, and
  responsive layouts down to 320px

## Notes for going further

- Replace `ProductCan` usages with real photography when available
- Wire `CheckoutForm`'s `onComplete` to a real payment/order API
- Replace the in-memory mock catalog (`data/products.ts`) with a real product API
