const getLastDigit = require('./licensePlate');

test('Gets the las digit of the license plate', () => {

    expect(getLastDigit("PBX123")).toBe(3);

})

test('Gets the las digit of the license plate', () => {
    const getLastDigit = () => {
        throw new TypeError("Please enter a valid license plate");
    }

    expect(() => { getLastDigit("PBX12A"); }).toThrow("Please enter a valid license plate")

})