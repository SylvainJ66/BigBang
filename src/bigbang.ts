class BigBang {
  parse(number: number) {
    const specialNumbers: number[] = [5, 7, 11];
    let result = '';

    for (let i = 0; i < 3; i++) {
      if (this.multipleOf(number, specialNumbers[i]))
        result += this.getRelatedString(specialNumbers[i]);
    }

    if (this.multipleOf(number, 5 * 7 * 2))
      result = this.getRelatedString(7) + this.getRelatedString(5);
    return result === '' ? number.toString() : result;
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
