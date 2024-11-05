// * Session 2 : Strings 

// * We can write string in ' ' , and we can add strings to get a bigger one this is called concatenation
// *combine strings together e.g : 'some' + 'text' the console will show : sometext 
// * To check a type of a variable in generale we can use : typeof variable 
// * e.g : type of 2 , it will show : 'number'

// * JavaScript does type coercion : automatic type conversion ; for example adding a string to a integer 
// * it will show as a string at the end
// * If we want to do math and adding a string to the number we get , money $22 for example it's possible but 
// * we have to make sure that the math is between brackets since strings also follow the Order of Operations

// * In javascript there's 3 ways for creating strings : 
// * 1 - using single quote ' ' (recommanded)
// * 2 - using double quote " " ( if the text has ' ' it's better to use it then )
// ! if we still want to use single quote in the case that the text has one it's still possible by using 
// ! an escape character \ infront of the ' that we want to show , the \' is considered as a single character
// ! same thing for using \" it's like saying this double quote is just a text 

// * 3 - using backticks ` ` they are called template strings bacause they have special features
// * - Interpolation : insert value directly into a string 
// * instead of using concatenation to create a string and calculate numbers the backticks allow us to do so directly 
// * by putting the numbers inside ${ } 
// * something like ' items ( ${ 10 + 3 } )'
// * - Multi-line string 


// * Exercise 3 : (using console)
// * a -  ' My name is : '   ;   b - ' Aya '   ;  c - ' My name is : ' +  ' Aya '  ;   d - ' Total cost : $ ' + (5 + 3)
// * e - ` Total cost : $ ${ 5 + 3}`        ;  f - alert ( ` Total cost : $ ${ 5 + 3 }` )   
// * g - ' Total cost : $ ' + (599 + 295)/100       ;  h - ` Total cost : $ ${ (599 + 295)/100 }`
// * i - alert ( ` Total cost : $ ${ (599 + 295)/100 }` )
// * j - alert ( ` Total cost : $ ${ (599 + 295)/100 }
// *                             Thank you , come again ! `)
// * k - ` Items (${2 + 2}) :               $${ ( (799+ 2095 )* 2 )/100 }`
// * l - ` Shipping & handling :                $${ (499 * 2) /100 } `
// * m - ` Total before tax :                      $${(799 * 2 +2095 * 2 + 499 * 2)/100 }`
// * n - ` Estimated tax (10%) :                     $${ Math.round((799 * 2 +2095 * 2 + 499 * 2)* 0.1 )/100 }`