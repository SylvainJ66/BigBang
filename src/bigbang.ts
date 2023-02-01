class BigBang {
  parse(number: number) {
    if(this.multipleOf(number, 11)) return 'boom';
    if(number % 7 === 0) return 'bang';
    if(number % 5 === 0) return 'big';
    return number.toString();
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }
}

export default new BigBang();
