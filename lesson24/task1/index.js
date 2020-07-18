export weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']


export getDayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
};

const result = getDayOfWeek(new Date(2020, 4, 25), 9);

console.log((result));