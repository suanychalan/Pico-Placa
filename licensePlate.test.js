const PicoPlaca = require('./licensePlate');
const picoPlaca1 = new PicoPlaca("PBX-129", "July 8, 2022 01:15:00", "16:53:10");
const picoPlaca2 = new PicoPlaca("PBX-123", "July 10, 2022 01:15:00", "20:53:10");

test('Gets the las digit of the license plate', () => {
    expect(picoPlaca1.getLastDigit()).toBe(9);
    expect(picoPlaca2.getLastDigit()).toBe(3);
});

test('Gets the day of the date selected', () => {
    expect(picoPlaca1.getDay()).toBe(5);
    expect(picoPlaca2.getDay()).toBe(0);
});

test('Gets the license plates that cannot be on the road', () => {
    expect(picoPlaca1.getPlateDay(5)).toStrictEqual([9, 0]);
    expect(picoPlaca2.getPlateDay(0)).toStrictEqual([-1]);
});

test('Shows if there is Pico & Placa in the time selected', () => {
    expect(picoPlaca1.getPicoPlacaActive()).toBe(true);
    expect(picoPlaca2.getPicoPlacaActive()).toBe(false);
});

test('Shows if there is Pico & Placa ', () => {
    expect(picoPlaca1.getPicoPlaca()).toBe(true);
    expect(picoPlaca2.getPicoPlaca()).toBe(false);
});