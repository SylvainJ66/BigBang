class BigBang {

  private _specialNumbers: Map<number, string>;

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
    return (
      (this.multipleOf(number, 5) ||
        this.multipleOf(number, 7) ||
        this.multipleOf(number, 11)) &&
      this.multipleOf(number, 2)
    );
  }

  get specialNumbers(): Map<number, string> {
    return this._specialNumbers;
  }

  set specialNumbers(value: Map<number, string>) {
    this._specialNumbers = value;
  }
}

export default new BigBang();
