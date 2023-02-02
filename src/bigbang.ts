class BigBang {
  parse(number: number) {
    let result = number.toString();
    if (this.multipleOf(number, 5)) result = this.getRelatedString(5);
    if (this.multipleOf(number, 7)) result = this.getRelatedString(7);
    if (this.multipleOf(number, 11)) result = this.getRelatedString(11);
    if (this.multipleOf(number, 5 * 7))
      result = this.getRelatedString(5) + this.getRelatedString(7);
    if (this.multipleOf(number, 5 * 7 * 2))
      result = this.getRelatedString(7) + this.getRelatedString(5);
    return result;
  }

  private getRelatedString(number: number) {
    if (number === 5) return 'big';
    if (number === 7) return 'bang';
    if (number === 11) return 'boom';
    return '';
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }
}

export default new BigBang();
