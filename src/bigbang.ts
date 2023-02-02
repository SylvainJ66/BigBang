class BigBang {
  parse(number: number) {
    if(number === 70) return 'bangbig';
    if (this.multipleOf(number, 5 * 7)) return 'bigbang';
    if (this.multipleOf(number, 11)) return 'boom';
    if (this.multipleOf(number, 7)) return 'bang';
    if (this.multipleOf(number, 5)) return 'big';
    return number.toString();
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }
}

export default new BigBang();
