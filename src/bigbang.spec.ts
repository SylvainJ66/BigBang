import BigBang from './bigbang';

describe('BigBang', () => {
  test('should return 1', () => {
    expect(BigBang.Parse(1)).toBe('1');
  });
  test('should return 2', () => {
    expect(BigBang.Parse(2)).toBe('2');
  });
  test('should return 3', () => {
    expect(BigBang.Parse(3)).toBe('3');
  });
  test('should return big', () => {
    expect(BigBang.Parse(5)).toBe('big');
  });
});
