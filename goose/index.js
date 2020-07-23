function getSuccessRate(statistic) {
    let percent = 0;
    for (let i = 0; i <= statistic.length; i++) {
        if (statistic[i]) {
            percent = +(statistic[i]) + percent;
            console.log(percent);
        }

    }
    return Math.round((statistic.length / 100) * percent);
}


console.log(getSuccessRate('111111'))