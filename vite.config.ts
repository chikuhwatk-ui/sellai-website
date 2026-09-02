import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Swaps the crawler-facing tags in index.html to match the site mode, so a link
 * shared on WhatsApp while we are pre-launch shows the teaser, not the product.
 * The mode itself comes from VITE_SITE_MODE (see src/config/siteMode.ts).
 */
function siteModeHtml(mode: string): Plugin {
  const comingSoon = mode !== 'full'
  const title = comingSoon ? 'Sellai · Coming soon to Harare' : 'Sellai · Post what you need. Get offers in minutes.'
  const description = comingSoon
    ? 'Whatever you are looking for is closer than you think. Something new is coming to the way Harare buys and sells. Be the first to know.'
    : 'Sellai introduces buyers to verified local sellers in Zimbabwe. Post what you need once, compare real offers, then collect in person or have a Sellai runner bring it with a PIN-secured handoff.'
  const image = comingSoon ? 'https://sellai.africa/og-soon.png' : 'https://sellai.africa/og.png'
  const themeColor = comingSoon ? '#08301F' : '#0B3F2E'

  return {
    name: 'sellai-site-mode-html',
    transformIndexHtml(html) {
      return html
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`)
        .replace(/(<meta name="theme-color" content=")[^"]*(")/, `$1${themeColor}$2`)
    },
  }
}

export default defineConfig(({ mode }) => {
  // Railway/OS env wins over .env files, so setting VITE_SITE_MODE=full on Railway launches the site.
  const env = { ...loadEnv(mode, process.cwd(), 'VITE_'), ...process.env }
  const siteMode = (env.VITE_SITE_MODE || 'coming-soon').trim()
  return {
    plugins: [react(), tailwindcss(), siteModeHtml(siteMode)],
  }
})
