/**
 * Detects if a string contains romaji. (a-zA-Z)
 */
export function isRomaji(term: string) {
  return /[a-zA-Z]/.test(term);
}
