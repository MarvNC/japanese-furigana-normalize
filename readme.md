# Japanese Furigana Normalize

[![npm](https://img.shields.io/npm/v/japanese-furigana-normalize?style=for-the-badge)](https://www.npmjs.com/package/japanese-furigana-normalize)

This package provides a utility function to normalize Japanese readings
containing furigana. It is particularly useful for creating Yomitan dictionaries
and ensuring the readings are properly aligned with the kanji characters.

## Purpose

Let's say you have a term such as `喫茶ステラと死神の蝶` and its reading
`かふぇすてらとしにがみのちょう`. The term contains the katakana `ステラ`, but
the reading is in hiragana. So if you were to put this into a Yomitan
dictionary, you would want to normalize the reading to
`かふぇステラとしにがみのちょう` so that there is no unnecessary furigana on top
of the katakana characters. This package handles this as well as other cases to
ensure the readings are properly handled by Yomitan.

|  ![chrome_喫茶ステラと死神の蝶_-_Yomitan_Search_-_Google_Chrome_2024-02-09_15-41-31](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/5c15b89f-0fba-4130-9428-249de879c52e)  |  ![chrome_Yomitan_Search_-_喫茶ステラと死神の蝶_-_Yomitan_Search_2024-02-09_15-45-00](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/d430c22b-23db-49de-b42a-73f454059536)  |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![chrome_アイザック・ニュートン_-_Yomitan_Search_-_Google_Chrome_2024-02-09_15-52-05](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/74383b0e-2440-49b5-974b-5319be5a7002) | ![chrome_Yomitan_Search_-_アイザック・ニュートン_-_Yomitan_Search_2024-02-09_15-52-27](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/d6635127-0b6b-47ab-b7c0-baa9d2c190cb) |
|                                                                                     **Before normalization**                                                                                      |                                                                                      **After normalization**                                                                                       |

## Installation

```
npm install japanese-furigana-normalize
```

## Usage

The primary function provided by this package is
`normalizeReading(term: string, reading: string)`, which takes two parameters:

- `term`: The term or phrase.
- `reading`: The corresponding reading in hiragana.

The function normalizes the reading to match and align with the kanji characters
present in the term.

For example:

```typescript
import { normalizeReading } from 'japanese-furigana-normalize';

const term = '喫茶ステラと死神の蝶'; // Kanji term
const reading = 'かふぇすてらとしにがみのちょう'; // Hiragana reading
const normalizedReading = normalizeReading(term, reading);
console.log(normalizedReading); // Output: かふぇステラとしにがみのちょう
```

For more examples, you can refer to the
[`normalizeReading.test.ts`](./src/test/normalizeReading.test.ts) file.
