import { containsKanji } from './text-util/containsKanji';
import { hiraganaToKatakana } from './text-util/hiraganaToKatakana';
import { isKatakana } from './text-util/isKatakana';

/**
 * Normalizes a reading to match for things with katakana in the string.
 */
export function normalizeReading(term: string, reading: string) {
  if (isKatakana(term)) {
    const katakanaArr = hiraganaToKatakana(reading).split('');
    // combine like parts of reading
    const hiraganaArr = reading.split('');
    const outputReading = [];

    const termArr = term.split('');
    while (katakanaArr.length > 0) {
      const termChar = termArr.shift();
      if (containsKanji(termChar)) {
        // consume kanjis in succession
        while (containsKanji(termArr[0])) {
          termArr.shift();
        }
        // consume reading up till kanji is over
        while (katakanaArr.length > 0 &&
          katakanaArr[0] !== termArr[0] &&
          hiraganaArr[0] !== termArr[0]) {
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
  } else {
    return reading;
  }
}
