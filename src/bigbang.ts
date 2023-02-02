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
    for (const key of Array.from(this._specialNumbers.keys())) {
      if (this.multipleOf(number, key))
        result.push(this._specialNumbers.get(key)!);
    }
    if (this.isReversible(number)) result = result.reverse();
    return result.length === 0 ? number.toString() : result.join('');
  }

  private multipleOf(number: number, multiple: number) {
    return number % multiple === 0;
  }

  private isReversible(number: number): boolean {
    let isTransformed = false;
    for (const key of Array.from(this._specialNumbers.keys())) {
      if (this.multipleOf(number, key)) {
        isTransformed = true;
      }
    }
    return isTransformed && this.multipleOf(number, 2);
  }

  get specialNumbers(): Map<number, string> {
    return this._specialNumbers;
  }
}

export default new BigBang();
