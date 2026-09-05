# Sun Auto Gas — Website

Website for **Sun Auto Gas**, a sequential LPG & CNG fitting and service centre run by P.M. Ansari in Thiruvanmiyur, Chennai.

🔗 Live business listing: [Sun Auto Gas Fitting And Service on Google Maps](https://www.google.com/maps/place/Sun+Auto+Gas+Fitting+And+Service/@12.9770088,80.2539649,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525d68260dda2f:0xc9db06bb2d54e316!8m2!3d12.9770088!4d80.2539649!16s%2Fg%2F11cn5p9zb4)

## About

- **Address:** No. 46, Avvai Nagar Main Road (Canal Road), Opp. Pandian Street, Thiruvanmiyur, Chennai - 600 041
- **Phone / WhatsApp:** +91 98412 00383
- **Hours:** Everyday, 9:00 AM – 8:00 PM
- **Services:** LPG fitting & service, CNG fitting & service, sequential fuel injection kits, gas pipe line installation, all-brand kits & spares
- **Authorised for:** Lovato, STAG, Zavoli, BRC

## Tech stack

Plain HTML, CSS and vanilla JavaScript — no framework, no build step, no dependencies to install. Fonts (Oswald, Inter, IBM Plex Mono) load from Google Fonts at runtime.

## Project structure

```
sun-auto-gas-website/
├── index.html          Home — hero, savings calculator, services overview
├── services.html        Detailed services + brand tie-ups
├── about.html            Owner, mission, location
├── contact.html          Address, map, hours, click-to-call/WhatsApp
├── css/
│   └── style.css          All styling (design tokens at the top)
├── js/
│   └── main.js             Mobile nav toggle, savings calculator, footer year
└── images/
    ├── favicon.svg          Logo mark
    ├── storefront.jpg
    ├── signboard.jpg
    ├── kit-diagram.jpg
    └── visiting-card.jpg
```

## Running locally

No build step needed. Either:

- Double-click `index.html` to open it directly in a browser, **or**
- Serve it locally so relative paths behave exactly like production:
  ```bash
  cd sun-auto-gas-website
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

## Editing

- **Colors, fonts, spacing:** all defined as CSS variables at the top of `css/style.css` under `:root`.
- **Copy/text:** edit directly in each `.html` file — there's no templating, so shared blocks (header/nav/footer) are repeated in each page and need to be updated in all four files if changed.
- **Phone number / hours / address:** appears in the footer of every page, plus `contact.html` — search-and-replace across files if it ever changes.

## Deployment

See the steps below to publish via GitHub Pages. The site is fully static, so it also works as-is on Netlify, Vercel, or any basic web host.

## License

All content, photos, and branding belong to Sun Auto Gas.
