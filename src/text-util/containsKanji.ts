import isKanji from './isKanji';

function isNumber(char: string) {
  return /[0-9０-９]/.test(char);
}

/**
 * Detects if a string contains kanji or number.
 */
export function containsKanjiOrNumber(term: string) {
  return term.split('').some((char) => isKanji(char) || isNumber(char));
}
