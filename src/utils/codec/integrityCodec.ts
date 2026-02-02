export interface EncodedPayload {
  data: string
  hash: string
  version: number
}

export async function encode<T>(state: T): Promise<string> {
  const json = JSON.stringify(state)
  const data = new TextEncoder().encode(json)

  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  const payload: EncodedPayload = {
    data: btoa(json),
    hash,
    version: 1
  }

  return btoa(JSON.stringify(payload))
}

export async function decode<T>(encoded: string): Promise<T | null> {
  try {
    const payload = JSON.parse(atob(encoded)) as EncodedPayload
    const json = atob(payload.data)

    const data = new TextEncoder().encode(json)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hash = Array.from(new Uint8Array(hashBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')

    if (hash !== payload.hash) return null

    return JSON.parse(json) as T
  } catch {
    return null
  }
}