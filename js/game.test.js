import { arrayLength } from './game.js';
describe('Given arrayLength funtion', () => {
    let arrayLengthTest;

    describe('When arguments is an array [2,5,10,25,30]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25, 30];
        });
        test('Then result should be 5', () => {
            const expected = 5;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
});
