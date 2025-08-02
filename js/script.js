
// console.log("Hello World");

// for loop

for (let i = 1; i <= 10; i++){
    console.log("Hello World");
    console.log(i);
}

// array
// let marks =[23, 67, 76, 89, 33];

// marks[0];
// marks[1];
// marks[2];
// marks[3];
// marks[4];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);

// using loop

// for (let i = 0; i <= 4; i++){
//     // console.log(marks[0]);
//     // console.log(marks[i]);
// }


// let number = 20;
let number = 21;

if (number % 2 == 0){
    console.log('Even Number');
}

else{
    console.log('Odd Number');
}

// ====================================
// array
let marks2 =[23, 44, 47, 88, 98, 67, 72, 76, 89, 33];

for (let i = 0; i<=9; i++){
    // console.log(marks2[i]);
    if (marks2[i] % 2 == 0){
    console.log("Even Number =" + marks2[i]);
}

else{
    console.log("Odd Number =" + marks2[i]);
}
}