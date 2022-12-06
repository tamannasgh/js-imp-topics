// const user1 = {
//     name: "tamanna",
//     login(){
//         console.log(`${this.name} logged in!`);
//     }
// }

// const user2 = {
//     name: "ishika",
//     login(){
//         console.log(`${this.name} logged in!`);
//     }
// }

// const user3 = {
//     name: "vanshika",
//     login(){
//         console.log(`${this.name} logged in!`);
//     }
// }

// function User(name){
//     this.name = name;
//     this.login = function(){
//         console.log(`${this.name} logged in!`);
//     }
// }

// const user1 = new User("tamanna");
// const user2 = new User("ishika");
// const user3 = new User("vanshika");

// function User(name){
//     this.name = name;
// }

// User.prototype.login = function(){
//     console.log(`${this.name} logged in!`);
// }

// const user1 = new User("tamanna");
// const user2 = new User("ishika");
// const user3 = new User("vanshika");

// User.prototype.login = function(){
//     console.log(`${this.name} logged in!(improoved)`);
// }

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     login(){
//         console.log(`${this.name} logged in!`);
//     }
// }

// const user1 = new User("tamanna");
// const user2 = new User("ishika");
// const user3 = new User("vanshika");

// class SuperUser extends User{
//     talk(){
//         console.log(`${this.name} is talking!`);
//     }
// }

// const sUser1 = new SuperUser("krishna");

const user1 = {
    name: "tamanna",
    login(){
        console.log(`${this.name} logged in!`);
    }
}
user1.login();

const sUser1 = Object.create(user1);
sUser1.name = "ishika";
sUser1.login();

const sUser2 = {
    name: "mahadev",
}

//later at some point

Object.setPrototypeOf(sUser2, user1);
sUser2.login();


