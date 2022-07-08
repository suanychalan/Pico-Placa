function getLastDigit(licensePlate) {
    //licensePlate = document.getElementById("licensePlate")
    // licensePlate = "PBX123"
    var lastDigitStr = String(licensePlate).slice(-1);
    var lastDigitNum = Number(lastDigitStr);
    if (typeof lastDigitNum != 'number') {
        throw new Error("Please enter a valid license plate");
    }
    return lastDigitNum;

}
module.exports = getLastDigit;