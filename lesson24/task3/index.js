// const startDate = new Date(2020, 0, 1, 20, 3);
// const endDate = new Date(2020, 9, 6, 2, 20);


const getDiff = (startDate, endDate) => {
    const diffInMs = Math.abs(startDate.getTime() - endDate.getTime());

    const seconds = Math.floor((diffInMs / 1000) % 60);
    const minutes = Math.floor((diffInMs / 1000 / 60) % 60);
    const hours = Math.floor((diffInMs / 1000 / 60 / 60) % 24);
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    // const days = parseInt(startDate.getDate()) - parseInt(endDate.getDate());
    // const hours = parseInt((startDate.getHours()) - parseInt(endDate.getHours()) % 24);
    // const minutes = parseInt((startDate.getMinutes()) - parseInt(endDate.getMinutes()) % 60);
    // const seconds = parseInt((startDate.getSeconds()) - parseInt(endDate.getSeconds()) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

// console.log(getDiff(startDate, endDate));
export { getDiff };

// algo
// 1 startDate - endDate, math.abs
// 2 days,hours,mins,secs