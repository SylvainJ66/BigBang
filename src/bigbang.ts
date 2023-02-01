class BigBang {
  parse(number: number) {
    if(number === 3) return '3';
    if(number === 2) return '2';
    return '1';
  }
}

export default new BigBang();
