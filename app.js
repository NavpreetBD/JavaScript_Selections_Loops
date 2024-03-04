console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i=1; i <=100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BIZZ");
    }
    else {
        console.log(i);
    }
}

// Exercise 3 
console.log("Exercise 3 :\n======\n");
console.log("Printing odds with a while loop")
// WHILE for exercie 1
let number = 1;
while ( number <= 100){
    if (number % 2 !=0) {
        console.log(number);
    }
    number++;
}
// DO-WHILE for Exercise 1
let number = 1;
do {
    if (number % 2 !=0) {
        console.log(number);
    }
    number++
}
while (number <= 100);

console.log("Fizz Buzz with do-while loop")
//DO-WHILE for exercise 2
let num = 1;
do{
    if (num % 3 == 0 && num % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (num % 3 == 0){
        console.log("FIZZ");
    }else if (num % 5 == 0){
        console.log("BUZZ");
    }
    else{
        console.log(num);
    }
    num++
}
while(num <= 100);

//Exercise 4
console.log("Exercise 4 :\n======\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
console.log("Round Value: ");
console.log(value);
console.log("end point");
console.log(n);
console.log("checking to see if we have the value ....");

let isFound = false;
for (let i = 1; i <= n; i++ ){
    if ( i == value ){
        console.log("Found value!");
        isFound = true;
        break;
    }
    else{
        console.log("Did not find value");
        isFound = false;
    }
}
if(isFound == false){
    console.log("Did not find value");
}



//Exercise 5
console.log("Exercise 5 :\n======\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("Fizz Divisor : ");
console.log(fizzDivisor);
console.log("Buzz Divisor: ");
console.log(buzzDivisor);
console.log("Starting Number: ");
console.log(start);
console.log("Ending number: ");
console.log(end);
console.log("Solution: ");

for (let i = start; i <= end; i++ ){
    if(i % fizzDivisor ===0 && i % buzzDivisor ===0){
        console.log(`${i} FIZZBUZZ`);
    } else if ( i % fizzDivisor == 0){
        console.log(`${i} FIZZ`);
    } else if ( i % buzzDivisor == 0){
        console.log(`${i} BUZZ`);
    }
    else {
        console.log(`${i} `);
    }
}