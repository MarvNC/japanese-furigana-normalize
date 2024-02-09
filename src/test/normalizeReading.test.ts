import test from 'ava';

import { normalizeReading } from '../normalizeReading';

type testCase = {
  term: string;
  inputReading: string;
  expectedReading: string;
};

const testCases: testCase[] = [
  // あいこうだいめいでん	愛工大名電	固有名詞	nico-pixiv
  {
    term: '愛工大名電',
    inputReading: 'あいこうだいめいでん',
    expectedReading: 'あいこうだいめいでん',
  },
  {
    // あいこん	icon	アルファベット	nico-pixiv
    term: 'icon',
    inputReading: 'あいこん',
    expectedReading: 'あいこん',
  },
  // あいざっくあしもふ	アイザック・アシモフ	固有名詞	nico-pixiv
  {
    term: 'アイザック・アシモフ',
    inputReading: 'あいざっくあしもふ',
    expectedReading: 'アイザック・アシモフ',
  },
  // あいざっくにゅーとん	アイザック・ニュートン	固有名詞	nico-pixiv
  {
    term: 'アイザック・ニュートン',
    inputReading: 'あいざっくにゅーとん',
    expectedReading: 'アイザック・ニュートン',
  },
  // かふぇすてらとしにがみのちょう	喫茶ステラと死神の蝶	固有名詞	nico-pixiv
  {
    term: '喫茶ステラと死神の蝶',
    inputReading: 'かふぇすてらとしにがみのちょう',
    expectedReading: 'かふぇステラとしにがみのちょう',
  },
  // かふぇのぞんびこ	カフェ野ゾンビ子	固有名詞	nico-pixiv
  {
    term: 'カフェ野ゾンビ子',
    inputReading: 'かふぇのぞんびこ',
    expectedReading: 'カフェのゾンビこ',
  },
  // かふぇぱれーど	Cafe Parade	アルファベット	nico-pixiv
  {
    term: 'Cafe Parade',
    inputReading: 'かふぇぱれーど',
    expectedReading: 'かふぇぱれーど',
  },
  // かまんべーるちーず	カマンベールチーズ	固有名詞	nico-pixiv
  {
    term: 'カマンベールチーズ',
    inputReading: 'かまんべーるちーず',
    expectedReading: 'カマンベールチーズ',
  },
];

for (const { term, inputReading, expectedReading } of testCases) {
  test(`normalizeReading(${term}, ${inputReading})`, (t) => {
    t.is(normalizeReading(term, inputReading), expectedReading);
  });
}
