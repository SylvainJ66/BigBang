import bigbang from './bigbang';

describe('BigBang', () => {
  test('should return 1 for 1', () => {
    expect(bigbang.Parse(1)).toBe("1");
  });
  test('should return 2 for 2', () => {
    expect(bigbang.Parse(2)).toBe("2");
  });
  test('should return 3 for 3', () => {
    expect(bigbang.Parse(3)).toBe("3");
  });
  test('should return big for 5', () => {
    expect(bigbang.Parse(5)).toBe("big");
  });
  test('should return big for 10', () => {
    expect(bigbang.Parse(10)).toBe("big");
  });
  test('should return big for 15', () => {
    expect(bigbang.Parse(15)).toBe("big");
  });
  test('should return bang for 7', () => {
    expect(bigbang.Parse(7)).toBe("bang");
  });
  test('should return bang for 14', () => {
    expect(bigbang.Parse(14)).toBe("bang");
  });
  test('should return bigbang for 35', () => {
    expect(bigbang.Parse(35)).toBe("bigbang");
  });
  test('should return bigbang for 105', () => {
    expect(bigbang.Parse(105)).toBe("bigbang");
  });
  test('should return bangbig for 70', () => {
    expect(bigbang.Parse(70)).toBe("bangbig");
  });
  test('should return bangbig for 280', () => {
    expect(bigbang.Parse(280)).toBe("bangbig");
  });
  test('should return bangbig for 7000', () => {
    expect(bigbang.Parse(7000)).toBe("bangbig");
  });
  test('should return 234411 for 7000', () => {
    expect(bigbang.Parse(234411)).toBe("234411");
  });
});
