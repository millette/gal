// npm
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// astro
import { defineConfig } from 'astro/config'
import devtoolBreakpoints from "astro-devtool-breakpoints"

export default defineConfig({
  integrations: [
    tailwind(),
    devtoolBreakpoints(),
    solid({
      include: ['**/solid/*'],
    }),
  ],
})
