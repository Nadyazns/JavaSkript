// algo:
// 1. startTimer starts the timer and changes secondsPassed for 1 sec each sec;
// 2. if seconds reach 60, seconds = 0 and plus one minut
export let timer = {
        secondsPassed: 0,
        minsPassed: 0,
        id: 0,
        startTimer() {
            this.id = setInterval(() => {
                this.secondsPassed++;
                if (this.secondsPassed === 60) {
                    this.secondsPassed = 0;
                    this.minsPassed++;
                }
            }, 1000); //interval seconds
        },

        // changeKeys() {
        //     this.secondsPassed++;
        //     if (this.secondsPassed === 60) {

        //         timer.minsPassed++;
        //         timer.secondsPassed = 0;
        //     }
        //     // console.log(`${timer.minsPassed}:${this.secondsPassed}`);
        // },
        getTime() {
            return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed:this.secondsPassed}`;
        },
        stopTimer() {
            clearInterval(this.id);
        },
        resetTimer() {
            this.secondsPassed = 0;
            this.minsPassed = 0;
        },
    }
    // timer.startTimer();
    // console.log(timer.resetTimer());