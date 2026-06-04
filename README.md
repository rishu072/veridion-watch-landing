<h1 align="center">VERIDION</h1>

<p align="center" style="font-size: 1.2rem; font-style: italic; color: #c6a15b; letter-spacing: 0.35em; text-transform: uppercase;">
  Timeless by Design
</p>

<p align="center">
  A premium, high-end landing page crafted for <strong>Veridion</strong>—a luxury Swiss timepiece brand combining precision engineering with timeless aesthetics. Engineered to perfection and built for legacy.
</p>

---

## 📖 Table of Contents

- [✨ Design Philosophy & Brand Core](#-design-philosophy--brand-core)
- [🛠️ Tech Stack & Key Libraries](#️-tech-stack--key-libraries)
- [🧩 Landing Page Architecture](#-landing-page-architecture)
- [✨ Key Interactive Features](#-key-interactive-features)
- [🚀 Quick Start & Development](#-quick-start--development)
- [📦 Build & Production](#-build--production)

---

## ✨ Design Philosophy & Brand Core

> *"Time Takes Everything. Except Class."*

Veridion crafts timepieces for those who appreciate the value of time and the art of true craftsmanship. This landing page is meticulously designed to reflect the luxury, sophistication, and meticulous detail of high-end horology. 

### Core Brand Pillars:
1. **Heritage & Passion:** Rooted in Swiss heritage, marrying tradition with modern excellence.
2. **Precision Engineering:** Spotlighting Swiss automatic movements and flawless mechanical accuracy.
3. **Finest Materials:** Showcasing elite craft elements like sapphire crystal, premium metal housings, and hand-stitched detailing.

---

## 🛠️ Tech Stack & Key Libraries

This project is built using a modern, performant, and highly visual web stack:

- **Frontend Library:** [React 19](https://react.dev/) — Declarative component architecture.
- **Build Tool:** [Vite 8](https://vite.dev/) — Lightning-fast development server and optimized build bundling.
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) — Modern utility-first CSS engine offering speed and seamless design integration.
- **Scroll Physics:** [Lenis](https://lenis.darkroom.engineering/) — Premium smooth inertial scroll library for natural-feeling page transition feel.
- **Animations:** [GSAP (GreenSock)](https://gsap.com/) & [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — Best-in-class performance-driven animations synced dynamically to viewport scrolling.
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) — Elegant, uniform typography vector icons.

---

## 🧩 Landing Page Architecture

The landing page features a modular structure designed for fluid storytelling:

### 1. Header & Navigation (`Navbar.jsx`)
- An elegant, overlay header set with the brand logo (imperial crown typography).
- Luxury brand typeface (`Cinzel`) styling with localized language selectors and clean navigation actions.

### 2. The Hero Experience (`Home.jsx`)
- Features a bold statement in serif typeface (`Cormorant Garamond`).
- Interactive right-side product hero section containing a high-definition luxury timepiece layout.
- Scaled clip-path entry animation powered by GSAP.

### 3. Craftsmanship Detail (`Craftmanship.jsx`)
- A modular split-pane highlighting the heart of Veridion watches.
- Contains an automatic mechanical skeleton layout displaying the fine gear components.
- Smooth scroll-triggered parralax scaling of images.
- Feature breakdown showcase highlighting:
  - 💎 **Finest Materials:** Uncompromising sourcing standards.
  - ⚙️ **Swiss Movement:** World-class automatic calibration.
  - 🛡️ **Built to Last:** Rigorously tested casing longevity.

### 4. Iconic Collection Grid (`Collection.jsx`)
Interactive showcases featuring the brand's master collections:
- **Veridion Aurelus** — Chronograph caliber
- **Veridion Novus** — Classic Swiss automatic
- **Veridion Infinitas** — Perpetual calendar compilation

*Features micro-hover cards that scale gracefully on viewport movement, dynamic card entry cascades, and price reveals.*

### 5. Heritage Cinematic Backdrop (`Story.jsx`)
- Immersive high-definition video backdrop showing mountains/landscapes reflecting raw heritage.
- Sleek overlay displaying the brand's founding values and story.
- Centered cinematic button detailing to watch the brand's high-production film.

### 6. Trust Badges Indicator (`badges.jsx`)
A clean premium grid validating the purchase confidence markers:
- ✈️ **Complimentary Shipping:** Worldwide logistics.
- 🔄 **Easy Returns:** Dedicated 30-day return policy.
- 🛡️ **International Warranty:** 5-year full guarantee on all calibers.
- 🎧 **Dedicated Concierge:** Direct personal assistant suite.

### 7. Global Footer & Newsletter (`Footer.jsx`)
- Detailed multi-column portal links (Collection, Brand, Support, Contact, Boutique).
- Responsive newsletter sign-up with sleek feedback interactions.
- Social networks alignment (Instagram, Facebook, YouTube, X).

---

## ✨ Key Interactive Features

- **Smooth Inflow Scroll:** Lenis handles all touch and wheel events, making page movement buttery smooth on high-refresh-rate displays.
- **GSAP Context Management:** Clean canvas setup which reverts all animations on component unmount, preventing performance leaks.
- **Dynamic Parallex & Scale:** Features scroll-triggered parallax effects on high-fidelity images for extra depth.

---

## 🚀 Quick Start & Development

To get the development environment running locally, execute these commands:

### 1. Clone the repository and navigate to the project directory:
```bash
git clone <repository-url>
cd veridion
```

### 2. Install dependencies:
```bash
npm install
```


### 3. Start the Vite development server:
```bash
npm run dev
```

The app will start running on your local machine, typically at `http://localhost:5173`.

---

## 📦 Build & Production

### Compile and minify for production:
```bash
npm run build
```

This compiles the source code into the `dist/` directory, optimized with high-performance CSS minification, asset optimization, and React runtime speed-ups.

### Preview local production build:
```bash
npm run preview
```

---

<p align="center" style="margin-top: 3rem;">
  <strong>Veridion</strong> © 2024. All rights reserved. Crafted for excellence.
</p>
