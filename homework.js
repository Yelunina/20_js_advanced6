//Problem -> console 10 times 10
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }


// for (var i = 0; i < 10; i++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log(index);
//         }, 1000);
//     })(i);
// }


// for (var i = 0; i < 10; i++) {
//     setTimeout((index) => {
//         console.log(index);
//     }, 1000, i);
// }

for (var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}

// for (var i = 0; i < 10; i++) {
//     setTimeout((function(index) {
//         return function() {
//             console.log(index);
//         }
//     })(i), 1000);
// }




//Solution 1 -> use let
// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// Solution 6 -> :)
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i++ % 10);
//     }, 1000);
// }