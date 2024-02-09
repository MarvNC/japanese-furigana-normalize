/**
 * Detects if a character contains katakana.
 */
export function isKatakana(term: string) {
  return /[ァ-ンヾ゛゜ー]/.test(term);
}
