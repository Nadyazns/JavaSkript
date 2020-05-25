export function createLogger() {
    let memory = [];


    function warn(str) {
        let warn = {
            message: str,
            type: 'warn',
            dateTime: new Date(),
        }
        return memory.push(warn);
    }

    function error(str) {
        let error = {
            message: str,
            type: 'error',
            dateTime: new Date(),
        }
        memory.push(error);
    }

    function log(str) {
        let log = {
            message: str,
            type: 'log',
            dateTime: new Date(),
        }
        memory.push(log);
    }

    function getRecords(type) {
        if (type != type) {
            return memory.sort((a, b) => b.dateTime - a.dateTime);
        }
        return memory.filter(elem => elem.type === type).sort((a, b) => b.dateTime - a.dateTime);


    }
    return {
        warn,
        error,
        log,
        getRecords,

    }
}

const logger1 = createLogger();
const logger2 = createLogger();
const logger3 = createLogger();