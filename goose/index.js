function doublePower(currentPowers) {

    for (let i = 0; i <= currentPowers.length; i++) {
        currentPowers[i] = currentPowers[i] * 2;
    }
    return currentPowers;
}
console.log(doublePower([100, 200, 3]))