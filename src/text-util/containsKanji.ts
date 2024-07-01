import isKanji from './isKanji';
import { isNumber } from './isNumber';

/**
 * Detects if a string contains kanji or number.
 */
export function containsKanjiOrNumber(term: string) {
  return term.split('').some((char) => isKanji(char) || isNumber(char));
}
