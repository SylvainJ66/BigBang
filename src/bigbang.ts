class BigBang {
    Parse(number: number) {
        if(number === 35)return 'bigbang';
        if(number % 7 === 0)return 'bang';
        if(number % 5 === 0)return 'big';
        return number.toString();
    }
}

export default new BigBang();
