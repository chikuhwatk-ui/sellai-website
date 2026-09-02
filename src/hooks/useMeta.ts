import { useEffect } from 'react'

const SITE = 'https://sellai.africa'

/**
 * Per-route <title> and description. The site is a client-rendered SPA, so
 * this is what the browser tab and history show; the crawler-facing defaults
 * live in index.html.
 */
export function useMeta(title: string, description: string, path = '/') {
  useEffect(() => {
    const full = title.includes('Sellai') ? title : `${title} · Sellai`
    document.title = full

    const set = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
      if (el) el.setAttribute(attr, value)
    }
    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', full)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', `${SITE}${path}`)
    set('meta[name="twitter:title"]', 'content', full)
    set('meta[name="twitter:description"]', 'content', description)
    set('link[rel="canonical"]', 'href', `${SITE}${path}`)
  }, [title, description, path])
}
