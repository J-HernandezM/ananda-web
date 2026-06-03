# Ananda E-Commerce — React POC

![Ananda screenshot](./public/readme-image.png)

This repository is a **proof of concept** built with [Next.js](https://nextjs.org/) for the **Ananda** e-commerce brand. It was developed to showcase a complete e-commerce frontend experience using modern React patterns and tools. You can visit the website at https://www.anandajaboneria.com

## Features showcased

- **Server-side rendering & App Router** — built with Next.js 14 App Router using React Server Components for data fetching and layout composition.
- **Shopping cart with Zustand** — global state management for cart operations (add, remove, update quantity), persisted across navigation.
- **Product catalog & detail pages** — responsive grid layout with category filtering, featured products carousel, and product detail with ingredient/usage/size dropdowns.
- **Mercado Pago integration** — payment integration draft available in the [`feat/mercadopago-integration`](https://github.com/J-HernandezM/ananda-web/tree/feat/mercadopago-integration) branch.
- **Strapi CMS integration** — headless CMS fetching for product data (now replaced with static mock data). Integration logic kept in `src/lib/data/products.ts` and `src/shared/utils/strapiImageLoader.js`.
- **Checkout form with Formik + Yup** — client-side form with validation, abstracted address and personal data fields.
- **Responsive design** — fully responsive layout using SCSS custom properties, mixins, and mobile-first breakpoints.
- **End-to-end & unit tests** — Cypress for E2E flows, Jest + React Testing Library for component and utility tests.
- **Husky + Prettier + ESLint** — pre-commit hooks for code formatting and linting enforcement.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Branches

| Branch | Purpose |
|---|---|
| `main` | Production-ready POC with static mock data |
| `feat/mercadopago-integration` | Mercado Pago payment button draft |
| `feat/on-construction-modal` | Under-construction modal warning |
