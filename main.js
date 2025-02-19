//let user = {
//     name: 'Bob',
//     age: 45,
//     isStudent: true
// }
//
// const user1 = user
// console.log(user === user1)  // true (по ссылке это один object)
//
// const user2 = {...user} // создали копию
// console.log(user === user2)  // false (objects не равны друг другу)
//
// const users = [
//     {id: 1, name: "Bob", age: 32, isStudent: true},
//     {id: 2, name: "Alex", age: 21, isStudent: true},
//     {id: 3, name: "Ann", age: 27, isStudent: false},
//     {id: 4, name: "Donald", age: 30, isStudent: true},
// ]


//CRUD


// //add user
// const newUser = {id: 5, name: "Hans", age: 37, isStudent: true}
// const newUsers = [...users, newUser]
// console.log(newUsers)

// //delete user id=3
// // 1 вариант
// const newUsers = users.filter((user)=> user.id !== 3)
// console.log(newUsers)

// // 2 вариант длинный
// let index
// const copyUsers1 = [...users]
// for (let i = 0; i < copyUsers1.length; i++) {
//     if (copyUsers1[i].id === 3) {
//         index = i
//     }
// }
// copyUsers1.splice(index, 1)
// console.log(copyUsers1)

//update user id=2  isStudent = false
//const newUsers = users.map(u=> u.id === 2 ? {...u, isStudent: false} : u)
//console.log(newUsers)

//ВИДЫ КОПИЙ
//const copy = [...users] // поверхностная копия
//console.log(users.map(u=> u.id === 2 ? {...u, isStudent: false} : u)) // условная
//const fullCopy = users.map(u => ({...u})) // глубокая копия (полная)
//const fullCopy2 = structuredClone(users) глубокая копия (полная)

// const superUser = {
//     name: 'Bob',
//     age: 32,
//     adress: {
//         street: 'Zhukova',
//         house: 32,
//         geo: {
//             n:5,
//             s:3
//         }
//     },
//     phone: '322541',
//     company: {
//         name: 'It-incubaotr',
//         bs: 'target-marketolog'
//     }
// }
// const newSuperUser1 = {...superUser, company: {...superUser.company, bs: 'frontend'}}
// const newSuperUser2 = {...newSuperUser1, adress: {...newSuperUser1.adress, street: 'bartashova'}}
// const newSuperUser3 = {...newSuperUser2, adress: {
//     ...newSuperUser2.adress, geo: {
//         ...newSuperUser2.adress.geo,
//             s: 2, n: 7}}}


//ДЕСТРУКТУРИРУЮЩЕЕ ПРИСВАИВАНИЕ
const array = ["Bob, Alex"]
const [bob, alex] = array

const studend = {name: "Marlin", age: 19 }
const {name, age} = studend
