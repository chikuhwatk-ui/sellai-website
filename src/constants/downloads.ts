// Public download URLs for the Sellai apps.
//
// Android and Windows binaries are hosted on GitHub Releases at
// chikuhwatk-ui/sellai-downloads. We link to the "latest release" permalink,
// so the marketing site never needs a code change on a new app release —
// upload a new release on GitHub with the SAME filenames and GitHub redirects
// /releases/latest/ to it automatically.
//
// IMPORTANT: when you upload a new release on GitHub, the asset filenames
// MUST match the ones below exactly (capitalization included), or these
// URLs will 404.

const RELEASES_BASE =
  'https://github.com/chikuhwatk-ui/sellai-downloads/releases/latest/download'

// sellai.apk is the 64-bit build (every phone since about 2017). The 32-bit
// build for older phones is published as sellai-arm32.apk; keep this null
// until that file exists on the release so the site never links to a 404.
export const ANDROID_APK_URL = `${RELEASES_BASE}/sellai.apk`
export const ANDROID_APK_ARM32_URL: string | null = null
export const WINDOWS_MSI_URL = `${RELEASES_BASE}/sellai-business-setup.msi`

// iPhone and Mac builds are in progress (2026-09). Until they ship, the site
// says so honestly and offers a one-click "tell me when" email instead of a
// dead App Store button. Flip these to real URLs when the builds are live.
export const IOS_APP_STORE_URL: string | null = null
export const MAC_DMG_URL: string | null = null

export const CONTACT_EMAIL = 'hello@sellai.africa'
export const IOS_WAITLIST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Tell me when Sellai is on iPhone')}&body=${encodeURIComponent('Hi Sellai team, please let me know when the iPhone app is available.\n\nMy phone number: ')}`
export const MAC_WAITLIST_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Tell me when Sellai Business is on Mac')}&body=${encodeURIComponent('Hi Sellai team, please let me know when the Mac app is available.\n\nMy phone number: ')}`
