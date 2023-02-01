class BigBang {
  parse(number: number) {
    if(number % 5 === 0) return 'big';
    return number.toString();
  }
}

export default new BigBang();
