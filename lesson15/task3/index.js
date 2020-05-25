export function createLogger() {
    let memory = [];


    function warn(str) {
        let warn = {
            type: 'warn',
            message: str,
            dateTime: new Date(),
        }
        return memory = [{...warn }];
    }

    function error(str) {
        let error = {
            type: 'error',
            message: str,
            dateTime: new Date(),
        }
        return memory = [{...error }];
    }

    function log(str) {
        let log = {
            type: 'log',
            message: str,
            dateTime: new Date(),
        }
        return memory = [{...log }];
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