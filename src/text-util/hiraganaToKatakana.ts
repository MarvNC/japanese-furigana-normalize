/**
 * Converts hiragana in a string to katakana.
 */
export function hiraganaToKatakana(hiragana: string) {
  return hiragana.replace(/[ぁ-ん]/g, function (match: string) {
    return String.fromCharCode(match.charCodeAt(0) + 96);
  });
}
