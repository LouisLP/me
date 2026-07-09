# me

My personal site: a single-page portfolio at [louislp.github.io/me](https://louislp.github.io/me).

I spent years as a video editor and motion designer before moving into frontend development. This site is where the two meet: one small, carefully built page where the design and motion work happens in the browser instead of a timeline. The site itself is meant to be the portfolio piece.

Built with Vue 3, Vite, and TypeScript. No component library, no CSS framework; the design system is hand-rolled in [src/styles](src/styles). The full picture of what the site is meant to become lives in [CONTEXT.md](CONTEXT.md).

## Development

```sh
pnpm install
pnpm dev          # dev server with HMR
pnpm type-check   # vue-tsc
pnpm build        # type-check + production build
pnpm preview      # serve the production build locally
```
