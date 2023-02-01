import bigbang from './bigbang';

describe('BigBang', () => {
  test('should parse 1 to "1"', () => {
    expect(bigbang.parse(1)).toBe('1');
  });
});
