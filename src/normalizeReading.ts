import { containsKanji } from './text-util/containsKanji';
import { hiraganaToKatakana } from './text-util/hiraganaToKatakana';
import { isKatakana } from './text-util/isKatakana';

/**
 * Normalizes a reading to match for things with katakana in the string.
 * @param term The term to match
 * @param reading The reading to normalize (expected to be only hiragana)
 */
export function normalizeReading(term: string, reading: string) {
  if (!isKatakana(term)) {
    return reading;
  }

  /**
   * Reading but in katakana
   */
  const katakanaArr = hiraganaToKatakana(reading).split('');
  const hiraganaArr = reading.split('');
  const termArr = term.split('');
  const outputReading = [];

  while (katakanaArr.length > 0) {
    const termChar = termArr.shift();
    if (termChar && containsKanji(termChar)) {
      // consume kanjis in succession
      while (termArr.length > 0 && containsKanji(termArr[0])) {
        termArr.shift();
      }
      // consume reading up till kanji is over
      while (
        katakanaArr.length > 0 &&
        katakanaArr[0] !== termArr[0] &&
        hiraganaArr[0] !== termArr[0]
      ) {
        outputReading.push(hiraganaArr.shift());
        katakanaArr.shift();
      }
    }

    // else match kanji/kana to reading
    else if (termChar === katakanaArr[0]) {
      hiraganaArr.shift();
      outputReading.push(katakanaArr.shift());
    } else if (termChar === hiraganaArr[0]) {
      katakanaArr.shift();
      outputReading.push(hiraganaArr.shift());
    } else if (!termChar) {
      katakanaArr.shift();
      outputReading.push(hiraganaArr.shift());
    } else {
      // for stuff like exclamation points at the end
      outputReading.push(termChar);
    }
  }

  return outputReading.join('');
}
