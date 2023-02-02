class BigBang {
  parse(number: number) {
    let result = number.toString();
    if (this.multipleOf(number, 5 * 7 * 2)) result = 'bangbig';
    if (this.multipleOf(number, 5 * 7)) result = 'bigbang';
    if (this.multipleOf(number, 11)) result = 'boom';
    if (this.multipleOf(number, 7)) result = 'bang';
    if (this.multipleOf(number, 5)) result = 'big';
    return result;
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }
}

export default new BigBang();
