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
});
