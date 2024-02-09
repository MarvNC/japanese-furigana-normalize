# Japanese Furigana Normalize

This package provides a utility function to normalize Japanese readings
containing furigana. It is particularly useful for creating Yomitan dictionaries
and ensuring the readings are properly aligned with the kanji characters.

## Purpose

Let's say you have a term such as `喫茶ステラと死神の蝶` and its reading
`かふぇすてらとしにがみのちょう`. The term contains the katakana `ステラ`, but
the reading is in hiragana. So if you were to put this into a Yomitan
dictionary, you would want to normalize the reading to
`かふぇステラとしにがみのちょう` so that there is no unnecessary furigana on top
of the katakana characters.

<details>

  <summary>Images</summary>

Before normalization:
![chrome_喫茶ステラと死神の蝶_-_Yomitan_Search_-_Google_Chrome_2024-02-09_15-41-31](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/5c15b89f-0fba-4130-9428-249de879c52e)

After normalization:
![chrome_Yomitan_Search_-_喫茶ステラと死神の蝶_-_Yomitan_Search_2024-02-09_15-45-00](https://github.com/MarvNC/japanese-furigana-normalize/assets/17340496/d430c22b-23db-49de-b42a-73f454059536)

</details>

## Installation

```
npm install japanese-furigana-normalize
```

## Usage

The primary function provided by this package is
`normalizeReading(term: string, reading: string)`, which takes two parameters:

- `term`: The term or phrase containing kanji characters.
- `reading`: The corresponding reading in hiragana.

The function normalizes the reading to match the kanji characters present in the
term. If the term contains katakana characters, the reading is expected to be in
hiragana. The function will then adjust the reading to align with the kanji
characters in the term.

For example:

```typescript
import { normalizeReading } from 'japanese-furigana-normalize';

const term = '喫茶ステラと死神の蝶'; // Kanji term
const reading = 'かふぇすてらとしにがみのちょう'; // Hiragana reading
const normalizedReading = normalizeReading(term, reading);
console.log(normalizedReading); // Output: かふぇステラとしにがみのちょう
```

For more examples, you can refer to the `normalizeReading.test.ts` file.