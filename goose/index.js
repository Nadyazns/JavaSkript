const getGuestsCount = guest => {
    guest = parseFloat(guest);

    if (Object.is(guest, NaN) || guest == undefined)
        return 'not a number';
    else
        return guest;
}

console.log(getGuestsCount('I am alone '));