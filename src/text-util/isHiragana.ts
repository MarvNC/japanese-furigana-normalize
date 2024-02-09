/**
 * Detects if a character contains hiragana.
 */
export function isHiragana(term: string) {
  return /[ぁ-ゔゞ゛゜ー]/.test(term);
}
