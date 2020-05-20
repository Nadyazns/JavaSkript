const splitText = (text, len = 10) => {
    const strArr = [];
    let start = 0;
    if (typeof text != "string") {
        return null;
    }
    while (true) {
        let chunk = text.substr(start, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        start += len;
    }
    return strArr.join('\n');
};

console.log(splitText('мамамылараму'));