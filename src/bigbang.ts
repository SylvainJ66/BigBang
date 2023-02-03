class BigBang {
  private readonly _specialNumbers: Map<number, string>;

  constructor() {
    this._specialNumbers = new Map<number, string>();
    this._specialNumbers.set(5, 'big');
    this._specialNumbers.set(7, 'bang');
    this._specialNumbers.set(11, 'boom');
  }

  parse(number: number) {
    let result: string[] = [];
    this.buildResponseArray(number, result);
    if (this.isReversible(number)) result = result.reverse();
    return result.length === 0 ? number.toString() : result.join('');
  }

  private buildResponseArray(number: number, result: string[]) {
    for (const specialNumber of Array.from(this._specialNumbers.keys())) {
      if (this.multipleOf(number, specialNumber))
        result.push(this._specialNumbers.get(specialNumber)!);
    }
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }

  private isReversible(number: number): boolean {
    const isTransformedIntoAString = Array.from(
      this._specialNumbers.keys(),
    ).some((n) => this.multipleOf(number, n));
    return isTransformedIntoAString && this.multipleOf(number, 2);
  }

  get specialNumbers(): Map<number, string> {
    return this._specialNumbers;
  }
}

export default new BigBang();
