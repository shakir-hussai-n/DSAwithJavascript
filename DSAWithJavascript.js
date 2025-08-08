// let age = prompt ("input any keywords: ")
//     age = Number(age)
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
let c = Number((2*Math.PI*r).toFixed(2))

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

/* let age = Number(prompt("What is you age?"));

if (isNaN(age)){
  console.log("wrong input")
} 
else if(age >= 18){
  console.log("you can vote");
} else{
  console.log("you can note vote");
} */

// Q9. Shoping  discaunt calculater.

/* let amt = Number(prompt("Enter the amount")); 
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

/*let unit = Number(prompt("enter the Unit"));
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


let amt = Number(prompt("enter the amount"));

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
}                            

// Reversion Pratice.
