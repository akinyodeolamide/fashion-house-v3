# Òwe Bespoke — Premium Nigerian Fashion House

A complete, production-ready fashion brand website. Not an e-commerce site — a digital showroom that directs visitors to WhatsApp to connect with the designer.

## Tech Stack

- **Next.js 14** (App Router, Static Export)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Swiper** (sliders)
- **yet-another-react-lightbox** (image lightbox)
- **React Icons**

## Design System

| Token | Value |
|-------|-------|
| Primary | `#0F3D2E` (Deep Forest Green) |
| Secondary | `#F8F6F2` (Warm Ivory) |
| Accent | `#C6A86A` (Champagne Gold) |
| Text | `#1E1E1E` |
| Background | `#FFFFFF` |

## Pages

- **Home** — Hero, stats, featured collections, featured designs, archive preview, about preview, testimonials, latest creations
- **About** — Brand story, mission, vision, craftsmanship, stats
- **Collections** — Category grid + individual category pages with product grids
- **Product Detail** — Gallery, description, WhatsApp CTA (no cart/checkout)
- **Fashion Archive** — Filterable image grid with lightbox
- **Latest Creations** — Visual content feed
- **Contact** — Address, phone, WhatsApp, email, map, social links
- **Search** — Products + posts search
- **Admin** — Dashboard, products, categories, posts, settings (protected)

## Admin Access

- URL: `/admin/login/`
- Demo credentials: `admin@owebespoke.com` / `admin123`
- In production, integrate with Netlify Identity for real authentication.

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Customization

All content lives in `app/data/*.json` files. Edit these to update:
- Products, prices, descriptions
- Categories
- Posts / latest creations
- Testimonials
- Site settings (phone, WhatsApp, address, social links)
- Stats

## Image Requirements

Add your images to `public/images/` matching the paths referenced in the JSON data files. The site uses placeholder backgrounds until images are added.

## License

Private — for Òwe Bespoke use only.
