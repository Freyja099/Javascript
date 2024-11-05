// * Session 1 : Basics

// * JavaScript is a technology that we use to create websites
// * HTML creates the content of a website (button , text , images ,...)
// * CSS changes the appearance of the HTML content
// * JavaScript is used to add interactivity to a website 

// * JavaScript :
// * - giving instructions to a computer 
// * - the computer follows the instructions

// * we can use console in browser to see direct changes while trying some codes
// * javascript can do pop up (alert) or math or modifying the web page

// * Exercise 1 : (using console )
// * a- alert('Good morning'); / b - alert('Aya'); / c - 10 + 5 / d - 20 - 5 / e - 2 + 2 - 5
// * f -document.body.innerHTML = 'Good morning ! '; / g - document.body.innerHTML = ' Aya';
// * h - 10 + 8 + 20 / i - 100 - 20 - 50 + 200 / j - document.body.innerHTML = ' ';

// * Numbers and math
// * Javascript and other programming languages have a problem with calculating floats that's because of 
// * the way the computer stores floats ; To avoid this unacurency for calculating money we use cent instead of dollars
// * e.g : 20.95 + 7.99  => 2095 + 799  and we divide all by 100 to go back to dollars

// * To round a number in javascript ( moving a number to the nearest integer ) : Math.round(number we want to round) 
// ! m in math should be in capital letter , Javascript is case sensitive

// * Exercise 2 : (using console )
// * a - 10 + 3 * 8 + 5 ; b - (10 + 3 * 8 + 5) / 3 ; c - (1850 + 2 * 750) / 100
// * d - ((1850 + 2 * 750)* 0.1) / 100 ; e - ((1850 + 2 * 750)* 0.2) / 100
// * f - (1899 + 799 + 2095)/100 ; g - (1899 + 799 + 2095 + 499)/100 ; 
// ! make sure that math.round doesn't contain /100 
// *h - Math.round(((1899 + 799 + 2095 + 499)*0.1))/100 ;
// * i - Math.round(((1899 + 799 + 2095 + 499)*0.1))/100 + (1899 + 799 + 2095 + 499)/100;

// *** To round a number down we use : Math.floor(num)
// *** To round a number up we use :Math.ceil(num)
// *** Use toFixed() for rounding to a specific number of decimal places.

// * h - Math.floor(2.8)  ; k -  Math.ceil (2.2) ; l - (25 * 9/5) + 32
// * m - (86 - 32)*5/9  ; n - (-5 *9/5 ) + 32

