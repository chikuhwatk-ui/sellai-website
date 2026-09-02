/**
 * Which site is served: the coming-soon page or the full marketing site.
 *
 * Controlled by ONE variable, read at build time:
 *   VITE_SITE_MODE=coming-soon   (default, from .env)
 *   VITE_SITE_MODE=full          (set this on Railway to launch; Railway rebuilds on change)
 *
 * Optional: VITE_PREVIEW_KEY=<secret>. While the site is in coming-soon mode, opening
 * https://sellai.africa/?preview=<secret> unlocks the full site for that browser tab
 * (kept in sessionStorage), so the founder can show it without launching.
 */
export type SiteMode = 'full' | 'coming-soon'

/**
 * Railway carries optional variables as visible placeholders (REPLACE_ME) until
 * the real value exists. A placeholder must read as "not set": never as a
 * preview password anyone could guess, never as a form endpoint.
 */
export function envValue(raw: string | undefined): string {
  const v = (raw ?? '').trim()
  return /^(REPLACE_ME|PLACEHOLDER|CHANGE_ME|TODO|xxx+|<[^>]*>)$/i.test(v) ? '' : v
}

const PREVIEW_FLAG = 'sellai-preview'

export function getSiteMode(): SiteMode {
  const configured = (import.meta.env.VITE_SITE_MODE || 'coming-soon').trim()
  if (configured === 'full') return 'full'

  if (typeof window === 'undefined') return 'coming-soon'
  try {
    const key = envValue(import.meta.env.VITE_PREVIEW_KEY)
    if (key) {
      const supplied = new URLSearchParams(window.location.search).get('preview')
      if (supplied && supplied === key) {
        window.sessionStorage.setItem(PREVIEW_FLAG, '1')
        // Drop the key from the address bar so it is not shared by accident.
        const clean = window.location.pathname + window.location.hash
        window.history.replaceState(null, '', clean)
      }
    }
    if (window.sessionStorage.getItem(PREVIEW_FLAG) === '1') return 'full'
  } catch {
    /* storage blocked: stay on coming-soon */
  }
  return 'coming-soon'
}
