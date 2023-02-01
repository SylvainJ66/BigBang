class BigBang {
  parse(number: number) {
    if(number === 11) return 'boom';
    if(number % 7 === 0) return 'bang';
    if(number % 5 === 0) return 'big';
    return number.toString();
  }
}

export default new BigBang();
