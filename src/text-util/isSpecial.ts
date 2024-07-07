import isKanji from './isKanji';
import { isKatakana } from './isKatakana';
import { isHiragana } from './isHiragana';
import { isNumber } from './isNumber';
import { isRomaji } from './isRomaji';

/**
 * Detects if a character is a special character (not kanji, katakana, hiragana, or number).
 * @param char The character to check.
 * @returns True if the character is a special character, false otherwise.
 */
export function isSpecial(char: string) {
  return (
    !!char &&
    !isKanji(char) &&
    !isKatakana(char) &&
    !isHiragana(char) &&
    !isNumber(char) &&
    !isRomaji(char)
  );
}
