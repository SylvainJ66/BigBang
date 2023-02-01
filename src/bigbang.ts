class BigBang {
  parse(number: number) {
    if (number % (5 * 11 * 2) === 0) return 'boombig';
    if (number % (5 * 11) === 0) return 'bigboom';
    if (number % (5 * 7 * 2) === 0) return 'bangbig';
    if (number % (5 * 7) === 0) return 'bigbang';
    if (number % 11 === 0) return 'boom';
    if (number % 7 === 0) return 'bang';
    if (number % 5 === 0) return 'big';
    return number.toString();
  }
}

export default new BigBang();
