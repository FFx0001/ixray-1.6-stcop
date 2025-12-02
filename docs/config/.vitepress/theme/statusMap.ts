export type SupportState = 'supported' | 'unsupported' | 'legacy'

export type SupportMeta = {
  label: string
  state: SupportState
}

/**
 * Значки поддержки боковой панели на странице.
 * Ключи должны соответствовать разрешенной ссылке на боковой панели (например, "/configs/dltx").
 */
export const supportStatusMap: Record<string, SupportMeta> = {
  //'/configs/dltx': { label: '1.3', state: 'supported' },
  //'/configs/xml-override': { label: 'Unsupported', state: 'unsupported' },
 // '/main/getting-started': { label: 'Unsupported', state: 'unsupported' },
}

const normalizeLink = (link: string) => link.replace(/^\/(en|ru)(?=\/)/, '')

export const getSupportMeta = (link?: string): SupportMeta | null => {
  if (!link) return null
  return supportStatusMap[link] ?? supportStatusMap[normalizeLink(link)] ?? null
}
