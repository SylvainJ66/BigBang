import bigbang from './bigbang';

describe('BigBang', () => {
  test('should parse 1 to "1"', () => {
    expect(bigbang.parse(1)).toBe('1');
  });
  test('should parse 2 to "2"', () => {
    expect(bigbang.parse(2)).toBe('2');
  });
  test('should parse 3 to "3"', () => {
    expect(bigbang.parse(3)).toBe('3');
  });
  test('should parse 5 to "big"', () => {
    expect(bigbang.parse(5)).toBe('big');
  });
  test('should parse 10 to "big"', () => {
    expect(bigbang.parse(10)).toBe('big');
  });
  test('should parse 15 to "big"', () => {
    expect(bigbang.parse(15)).toBe('big');
  });

});
