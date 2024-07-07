/**
 * Detects if a character contains a number.
 * @param char
 */
export function isNumber(char: string) {
  return /[0-9０-９]/.test(char);
}
