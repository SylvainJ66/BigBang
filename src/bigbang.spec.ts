import bigbang from './bigbang';

describe('BigBanf', () => {
  test('should return 1 for 1', () => {
    expect(bigbang.Parse(1)).toBe("1");
  });
  test('should return 2 for 2', () => {
    expect(bigbang.Parse(2)).toBe("2");
  });
  test('should return 3 for 3', () => {
    expect(bigbang.Parse(3)).toBe("3");
  });
  test('should return 5 for 5', () => {
    expect(bigbang.Parse(5)).toBe("big");
  });
  test('should return 10 for 10', () => {
    expect(bigbang.Parse(10)).toBe("big");
  });
});
