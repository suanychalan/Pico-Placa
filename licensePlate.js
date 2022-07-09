class PicoPlaca {
    constructor(licensePlate, date, time) {
        this.licensePlate = licensePlate;
        this.date = date;
        this.time = time;
    }

    getPicoPlaca() {
        const licenseLastDigit = this.getLastDigit();
        const currentDay = this.getDay();
        const platesDay = this.getPlateDay(currentDay);
        const picoPlacaActive = this.getPicoPlacaActive();

        if (platesDay.includes(licenseLastDigit) && picoPlacaActive) {
            return true;
        }
        return false;
    }

    getLastDigit() {
        //licensePlate = document.getElementById("licensePlate")
        var lastDigitStr = String(this.licensePlate).slice(-1);
        var lastDigitNum = Number(lastDigitStr);
        if (typeof lastDigitNum != 'number') {
            throw new Error("Please enter a valid license plate");
        }
        return lastDigitNum;
    }

    getDay() {
        const date = new Date(this.date);
        const day = date.getDay();
        return day;
    }

    getPlateDay(day) {
        switch (day) {
            case 1:
                return [1, 2];
            case 2:
                return [3, 4];
            case 3:
                return [5, 6];
            case 4:
                return [7, 8];
            case 5:
                return [9, 0];
            default:
                return [-1];
        }
    }

    getPicoPlacaActive() {
        const hour = this.time.substring(0, 2);
        const minutes = this.time.substring(3, 5);
        const hourNum = Number(hour);
        const minutesNum = Number(minutes);
        const timeLocal = hourNum + minutesNum / 60;

        if ((timeLocal >= 7 && timeLocal <= 9.5) || (timeLocal >= 16 && timeLocal <= 19.5)) {
            return true;
        }
        return false;
    }
}
module.exports = PicoPlaca;