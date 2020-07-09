export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name
    }
}

// const user1 = new User(1, 'Nadya', 'session-id');
// console.log(user1);
// user1.id = 2;
// console.log(user1);

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    }
    get users() {
        this._users;
    }
    getUserNames() {
        return this._users.map(i => i._name);
    }
    getUsersIds() {
        return this._users.map(i => i._id);
    }
    getUserNameById(id) {
        for (let user of this._users) {
            if (user.id === id) {
                return user.name;
            }
        }
    }
}