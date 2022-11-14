describe('Given stupid test funtion', () => {
    let valueA = 2;
    let valueB = 2;

    describe('When arguments is A+B', () => {
        test('Then result should be 4', () => {
            const expected = 4;
            const result = valueA + valueB;
            expect(result).toBe(expected);
        });
    });
});
