export const arrayLength = (array) => {
    let counter = 0;
    for (const i in array) {
        counter = Number(i) + 1;
    }
    return counter;
};
