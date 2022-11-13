import { arrayLength } from './game.js';
describe('Given arrayLength funtion', () => {
    let arrayLengthTest;

    describe('When arguments is an array [2,5,10,25]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25];
        });
        test('Then result should be 4', () => {
            const expected = 4;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
});
