const splitString = (str, num = 10) => {
    if (typeof str != "string") {
        return null;
    }
    let arrOfStrings = [];
    let start = 0;
    while (true) {
        let piece = str.substr(start, num)
        if (piece.length === 0) {
            break;
        }
        if (piece.length < num) {
            piece = piece + '.'.repeat(num - piece.length);
        };
        arrOfStrings.push(piece);

        start += num;
    }
    return arrOfStrings;
}


let line = 'jsdkjhfsiejhskdbvsmdhksjehliwherlwihelsdadjh';
console.log(splitString(line));