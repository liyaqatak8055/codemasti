import { lazy } from 'react'

/**
 * Wraps dynamic component imports with retry logic to recover from transient
 * network failures or deployment version mismatches (stale chunk hashes).
 *
 * @param {Function} componentImport - () => import('./path/to/Component')
 * @param {number} retries - Number of retry attempts before giving up (default 2)
 * @param {number} delay - Base delay between retries in ms (default 800)
 */
export function lazyWithRetry(componentImport, retries = 2, delay = 800) {
  return lazy(() =>
    new Promise((resolve, reject) => {
      const attempt = (retriesLeft) => {
        componentImport()
          .then(resolve)
          .catch((error) => {
            if (retriesLeft > 0) {
              setTimeout(() => attempt(retriesLeft - 1), delay)
            } else {
              // Check if it's a dynamic chunk fetch failure (common after a new build deployment)
              const msg = error?.message || ''
              const isChunkLoadError =
                error?.name === 'ChunkLoadError' ||
                /Loading chunk|Failed to fetch dynamically imported module/i.test(msg)

              if (isChunkLoadError && typeof window !== 'undefined') {
                const reloadKey = 'cm_chunk_reload_guard'
                if (!sessionStorage.getItem(reloadKey)) {
                  sessionStorage.setItem(reloadKey, 'true')
                  window.location.reload()
                  return
                }
              }
              reject(error)
            }
          })
      }
      attempt(retries)
    })
  )
}
