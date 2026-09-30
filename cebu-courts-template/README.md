# Cebu Courts Website Template (Basic tier)

React + Vite + Tailwind v4. Front-end only; availability is mock data.

## Run
    npm install
    npm run dev

## Where to edit
- `src/config/site.js`  business name, copy, address, hours, sports, courts, rates, amenities
- `src/theme/palettes.js`  the four palettes and their role mapping (auto-contrast text)
- `src/data/availability.js`  mock bookings and status thresholds; swap `getDay()` for an API later
- `src/components/Brand.jsx`  replace the Logo placeholder with the client's logo

## Structure
    src/
      App.jsx                   routes, loader, showcase panel, cart
      context/                  ShowcaseContext (tier + palette), CartContext
      pages/                    Landing, Booking, ComingSoon
      components/               Button, Brand, CourtDiagram, PhotoPlaceholder,
                                Loader, ShowcasePanel, CartButton, CartDrawer
      components/booking/       SportTabs, Calendar, Legend, SlotPanel

`vercel.json` rewrites all routes to index.html so /booking works on Vercel.
