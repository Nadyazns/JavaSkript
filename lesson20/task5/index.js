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
         return this._name;
     }
     get sessionId() {
         return this._sessionId;
     }
 }

 const user1 = new User(1, 'Nadya', 'session-id');
 console.log(user1);
 user1.id = 2;
 console.log(user1);

 export class UserRepository {
     constructor(users) {
         this._users = Object.freeze(users);
     }
     get users() {
         return this._users;
     }
     getUserNames() {
         return this._users.map(i => i._name);
     }
     getUserIds() {
         return this._users.map(i => i._id);
     }
     getUserNameById(i) {
         return this._users.find(a => a.id === i).name;
     }
 }


 const user2 = new User(200, 'Alex', 83275);
 const user3 = new User(00, 'X', 8275);
 const users = [user1, user2, user3]
 console.log(users)