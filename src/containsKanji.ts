import isKanji from './isKanji';
/**
 * Detects if a string contains kanji.
 */
export function containsKanji(term: string) {
  return term.split('').some(isKanji);
}
