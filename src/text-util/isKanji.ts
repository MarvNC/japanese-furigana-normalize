import XRegExp from '@gerhobbelt/xregexp';

/**
 * Returns true if the text is a valid CJK character.
 */
export function isKanji(text: string) {
  XRegExp.install('astral');
  return XRegExp(
    '\\p{InCJK_Unified_Ideographs}|\\p{InCJK_Unified_Ideographs_Extension_A}|\\p{InCJK_Unified_Ideographs_Extension_B}|\\p{InCJK_Unified_Ideographs_Extension_C}|\\p{InCJK_Unified_Ideographs_Extension_D}|\\p{InCJK_Unified_Ideographs_Extension_E}',
  ).test(text);
}
