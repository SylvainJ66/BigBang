class BigBang {
  parse(number: number) {
    if (number % 70 === 0) return 'bangbig';
    if (number % 35 === 0) return 'bigbang';
    if (number % 7 === 0) return 'bang';
    if (number % 5 === 0) return 'big';
    return number.toString();
  }
}

export default new BigBang();
