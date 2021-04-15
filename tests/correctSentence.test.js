import { correctsSentence } from '../correctSentence'

describe('Checking the sentence correctness', () => {
  test('Corrects the sentence "ala has a cat and cat has Ala"', () => {
    expect(correctsSentence("ala has a cat and cat has Ala")).toBe("Ala has a cat and cat has Ala.");
  })

  test('Corrects the sentence "  ala    has a cat and  cat has Ala  "', () => {
    expect(correctsSentence("  ala    has a cat and  cat has Ala  ")).toBe("Ala has a cat and cat has Ala.");
  })

  test('Corrects the sentence "  this is the sentence   without   a dot  "', () => {
    expect(correctsSentence("  this is the sentence   without   a dot  ")).toBe("This is the sentence without a dot.");
  })

  test('Corrects the sentence "  this is the sentence   without   a dot!!!!"', () => {
    expect(correctsSentence("  this is the sentence   without   a dot!!!!")).toBe("This is the sentence without a dot!!!!");
  })
});