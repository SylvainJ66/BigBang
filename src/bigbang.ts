class BigBang {
  parse(number: number) {
    const specialNumbers: number[] = [5, 7, 11];
    let result: string[] = [];

    for (let i = 0; i < 3; i++) {
      if (this.multipleOf(number, specialNumbers[i]))
        result.push(this.getRelatedString(specialNumbers[i]));
    }

    if (this.multipleOf(number, 5 * 7 * 2)) result = result.reverse();
    if (this.multipleOf(number, 5 * 11 * 2)) result = result.reverse();

    return result.length === 0 ? number.toString() : result.join('');
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
