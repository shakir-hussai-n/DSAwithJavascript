// let age = prompt ("input any keywords: ")
//     age = number
// (age)
// console.log(typeof(age));

// Swap variable by 3 method.

/* let a = 10;
   let b = 20;
   let c ;
   
    c = a;
    a = b;
    b = c;
  

   
   console.log(a);
   console.log(b);  */

// Swap variable by using arithmatic operator method or swap  variable without extra variable.

/*  let a = 10;
 let b = 20;
   
 a = a + b;
 b = a - b;
 a = a - b;

 console.log(a); // 20
 console.log(b); // 10
 console.log(a , b)  */

// Array destructuring swap.

/*  let a = 10;
 let b = 20;

 [a , b] = [b , a]

 console.log(a ,b) */

// Using of increment and decrement.
/* let i = 11;
 i = i++ + ++i;
 console.log(i);  */

/* let a = 11, b = 22;
 let c = a + b + a++ + b++ + ++a + ++b;
 console.log(a , b , c);   // output: 13 24 103;  */

/* let a = true;
 ++a;
 console.log(a); */

/* let i = 11;
let j = ++i;
console.log(j); */

// Math functions

/* // Math.round()
console.log(Math.round(10.6)); output : 11;
console.log(Math.round(10.4)); output : 10;


// Math.ceil()
console.log(Math.ceil(10.1)); output: 11;  //if the no cames in float it will increase the no and write in decimanl.


// Math.floor() 
console.log(Math.floor(10.8)); output: 10;  //if the no cames in float it will decrease the no and write in decimanl.Math


// Math.trunc()  
console.log(Math.trunc(10.98)); output: 10   //it  will just remove the float Poin.


// Math.pow() 
console.log(Math.pow(2,5)) ; output: 32;


// Math.sqrt()
console.log(Math.sqrt(25)); output: 5 // it will helps to find square of any no.


// Math.cbrt()
console.log(Math.cbrt(27)); output: 3  // it will helps to find cube root of the no.


// Math.abs()
console.log(Math.abs(-16)); output: 16 // it will convert - into + ;


// Math.max()
console.log(Math.max(12,34,5,44)); output: 44 // it will helps to find the biger no;


// Math.min()
console.log(Math.min(44,55,3,12,11));  output: 3 // it will helps to find the smaller no;


// Math.random()
console.log(Math.trunc(Math.random()*500 + 100)); output: 444; // this will helps to find the random no.


// toFixed()
let a = 89.23432
console.log(a.toFixed(2)); output: 89.23 // it will helps to keep 2 or more no after float point.  */

// Math Problem

/* function calculateRectangle ( l, b){

    let area =  l * b;
    let perimeter = 2 *( l + b);
    
    return { area , perimeter}
}

let result = calculateRectangle( 5, 3);

console.log(result);  */

// otp generate

/* const otp = Math.trunc(Math.random()*1000 + 100);
console.log(otp); */

// area of triangle by herons formula

/* let a = 5;
 let b = 4;
 let c = 3;   
 
 let s = (a+b+c)/2;
 console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c))); */

//circumference of circle

/* let r = 12;
let c = number
((2*Math.PI*r).toFixed(2))

console.log(typeof(c)); */

// Video 2 : conditional Statement

/*  Q8. Valid Voter
                                         Q9. Shop discount
                                         Q10. Bijili bill
                                         Q11. INR Denomination
                                         . Ternay Operator
                                         . Nested ternary Operator
                                         switch and One case handling multiple value
                                         switch case cam't handle float value because its precision issues.  */

// Q.8 Valid Voter  (Note : NaN === NaN : if false; isNaN(NaN): true; isNaN() is a function that helps to )

/* let age = number
(prompt("What is you age?"));

if (isNaN(age)){
  console.log("wrong input")
} 
else if(age >= 18){
  console.log("you can vote");
} else{
  console.log("you can note vote");
} */

// Q9. Shoping  discaunt calculater.

/* let amt = number
(prompt("Enter the amount")); 
let dis = 0;
if(isNaN(amt) || amt < 0){
 console.log("you have enter wrong input");
} else{
    if(amt <= 5000){
        dis = 0;
    }
    else if (amt < 7000){
        dis = 5;
    }
    else if (amt < 9000){
        dis = 10;
    }else if (amt > 9000){
        dis = 20;
    }
    console.log(amt - Math.floor(dis * amt / 100));
}                   
 */

// Q10. Electric bill calculater.

/*let unit = number
(prompt("enter the Unit"));
let amt = 0;
if (isNaN(unit) || unit < 0) {
  console.log("You have entered wrong input:");
} else {
  if (unit > 400) {
    amt = (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200 && unit <= 400) {
    amt += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100 && unit <= 200) {
    amt += (unit - 100) * 6;
    unit = 100;
  }

  amt += unit * 4;

  console.log("Total amount to Pay: " + amt);
} */

// INR Denomination

/*let amt = number
(prompt("enter the amount"));

if(isNaN(amt) || amt < 0){
  console.log("You have enter");
}
else{
  if(amt >= 500){
    console.log(" 500 note:" + Math.floor(amt/500));
    amt = amt % 500;
  }
  if(amt >= 200){
    console.log( " 200 note:" + Math.floor(amt/200));
    amt = amt % 200;
  }
  if(amt >= 100){
    console.log( " 100 note:" + Math.floor(amt/100));
    amt = amt % 100;
  }
  if(amt >= 50){
    console.log( " 50 note:" + Math.floor(amt/50));
    amt = amt % 50;
  }
  if(amt >= 20){
    console.log( " 20 note:" + Math.floor(amt/20));
    amt = amt % 20;
  }
  if(amt >= 10){
    console.log( " 10 note or coin:" + Math.floor(amt/10));
    amt = amt % 10;
  }
  if(amt >= 5){
    console.log( " 5 note or coin:" + Math.floor(amt/5));
    amt = amt % 5;
  }
  if(amt >= 2){
    console.log( " 2 coin :" + Math.floor(amt/2));
    amt = amt % 2;
  }
  if(amt === 1){
    console.log( " 1 coin :" + amt)
  }
}      */

// Switch : Simple calculater.
/*
let a = 5,
  b = 10;
let operater = "-";
switch (operater) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "%":
    console.log(a % b);
    break;

  default:
    console.log("Invalid Operater");
}  */

//Loops

/* let ans = 55;
for(let i = 1; i < ans; i++){
  console.log(i);
}                                             
*/

/*  let ans = 200;
for(let i = 100; i <= 200; i++){

  console.log(i);
} */

/* let cunt = 100;

for(let i = 200; i >= 100; i--){
  console.log(i);
}
*/

/*let cunt = 10;
for(var i = 1; i <= cunt; i++){
  console.log("hello");
}
console.log(i);
*/

/*let cunt = 10;
for(let i = 1; i <= cunt; i++){               
  console.log("hello");
}
console.log(i);

note: Here scope is taking place.
 */

// sum of Natural number
// .

/* let pr = prompt(" enter the no:");

if (pr === null) {
  console.log("canceled");
} else {
  let input = number
(pr);

  if (isNaN(input)) {
    console.log("you have  inter wrong input");
  } else if (input > 0) {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
      sum = sum + i;
    }
    console.log(sum);
  } else {
    console.log("you have enter the negative no");
  }
}   
  */

// Factors of number


/* let pr = prompt("Enter number
 Here:");
if(pr === null){
  console.log("you have canceled");
}else{

let input = number
(pr);
if(isNaN(input)){
  console.log(" wrong input:");
}else if(input > 0){

  for(let i = 1; i <= Math.floor(input/2); i++){
    if(input % i === 0){
      console.log(i)
      
    }
     
  }
  console.log(input)

}else{
  console.log("you input negative no:")
}

} */

// find The prime number
// :

/* let pr = prompt("enter the number
:");

if (pr === null) {
  console.log("canceled");
} else {
  let n = number
(pr);
  if (isNaN(n)) {
    console.log("wrong input");
  } else if (n > 0) {
    console.log(isPrimeNo(n));
  } else {
    console.log("you have entered negative no:");
  }
}

function isPrimeNo(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; n <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
} */

                                                   // Optimized and shorter program for sum of natural number; 
      
/*   let pr = prompt("input number:");
  if(pr === null){
    console.log("you have canceled:");
  }else{
     let n = Number(pr);
     console.log(isNaN(pr)? "you have wrong input": (n > 0 ) ? (n * (n + 1)) / 2 : "you have input negative number:");

  }
   */


                                                            //Optimized and shorter program for check prime number; 
                                                            // Note:if a number can not be divide by 2 or its self square root then it forther can not be divide: 


let pr = prompt("input number;");

if(pr === null){
  console.log("canceled");
}else{
let n = Number(pr);
if(isNaN(n)){
  console.log("wrong input");
}else if(n > 0){
  console.log(isPrime(n));
  

}
else{
  console.log("you have input wrong number:");
}
}

function isPrime(n) {
  if(n <= 1) return false;
  if(n === 2) return true;
  if(n % 2 === 0) return false;
for(let i = 3; i <= Math.floor(Math.sqrt(n)); i+= 2){

  if(n % 2 === 0) return false;

}
return true;
  
}

 


// Revision Practice.


