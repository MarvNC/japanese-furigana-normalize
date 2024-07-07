import isKanji from './isKanji';
import { isNumber } from './isNumber';
import { isRomaji } from './isRomaji';

/**
 * Detects if a string is something that should not be in furigana.
 * This includes kanji and numbers and romaji.
 */
export function shouldNotBeInFurigana(term: string) {
  return term
    .split('')
    .some((char) => isKanji(char) || isNumber(char) || isRomaji(char));
}
