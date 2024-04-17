# Learn Python Backend Development

## AI Web App

This is based [on this repository](https://github.com/tomitokko/ai-blog-article-generator).

I used the npm, vite, vue 3 and the necessary packages to build the app.

- Run:

```bash
npm init vite
```

- Select the following:

```text
$ npm init vite
√ Project name: ... frontend
√ Select a framework: » Vue
√ Select a variant: » TypeScript
```

- Install TailwindCss, PostCss and Autoprefixer:

```bash
npm i tailwindcss postcss autoprefixer
```

- Configure Tailwind:

```sh
npx tailwindcss init -p
```

- Update the `tailwind.config.js`:

```tsx
// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography, forms, aspectRatio],
};
```
