const numbers = [1,2,3,4,5,6]

//1.push
//
// //numbers.push(7)
// myPush(numbers, 7)
//
// function myPush(numbers, param) {
//     array[array.length] = param
//     return array.length
// }
// console.log(numbers)

//2.push
//push
//numbers.push(7)


// function myPush(array, ...params) {
//     for (let i = 0; i < params.length; i++) {
//         array[array.length] = params[i]
//     }
//     return array.length
// }
// myPush(numbers, 7, 8, 9)
// console.log(numbers)

// через for of
// function myPush(array, ...params) {
//     for (const element of params) {
//         array[array.length] = element
//     }
//     return array.length
// }
// myPush(numbers, 7, 8, 9)
// console.log(numbers)

//3.pop
// function myPop(array) {
//     const lastElement = array[array.length-1]
//     array.length = array.length-1
//     return lastElement
// }
//
// console.log(myPop(numbers))
// console.log(numbers)

function myShift(array) {
    const firstElement = array[0]
    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i]
    }
    array.length = array.length-1
    return firstElement
}

console.log(myShift(numbers))
console.log(numbers)