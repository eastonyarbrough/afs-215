class SunDial {
    constructor(number) {
        this.number = number;
    }

    timeOfDay() {
        if (typeof this.number !== 'number') {
            return 'Error: Please initiate with a number.'
        }
        else if (this.number % 3 === 0 && this.number % 7 !== 0) {
            return 'Good Morning';
        }
        else if (this.number % 3 !== 0 && this.number % 7 === 0) {
            return 'Good Afternoon';
        }
        else if (this.number % 3 === 0 && this.number % 7 === 0) {
            return 'Good Evening';
        }
        else if (this.number % 3 !== 0 || this.number % 7 !== 0) {
            return `${this.number}`;
        }
    }
}

module.exports = SunDial;