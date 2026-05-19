// Public download URLs for the Sellai apps.
//
// We host the binaries on GitHub Releases at chikuhwatk-ui/sellai-downloads
// and link to the "latest release" permalink, so the marketing site never
// needs a code change on a new app release — just upload a new release on
// GitHub with the SAME filenames and GitHub redirects /releases/latest/
// to it automatically.
//
// IMPORTANT: when you upload a new release on GitHub, the asset filenames
// MUST match the ones below exactly (capitalization included), or these
// URLs will 404.

const RELEASES_BASE =
  'https://github.com/chikuhwatk-ui/sellai-downloads/releases/latest/download'

export const ANDROID_APK_URL = `${RELEASES_BASE}/sellai.apk`
export const WINDOWS_MSI_URL = `${RELEASES_BASE}/sellai-business-setup.msi`
