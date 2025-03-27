// * Session 5 : Booleans and If Statements

// * The difference between == and === is that == converts the both values into the same type 
// * ex : console.log( 5 == '5.00' );    => this will display true 

// * === checks if two values are the same
// * Same goes for != and !== 

// * That's why in javascript we always use === or !== to avoid the conversion

// * For the order of operations: the comparison operators(< , > ,...) have a lower priority than the math operators (+ , - , /,...)

// * If Statements
// * if( boolean_value : the condition ) { code } : if the condition between ( ) is true we will run the code if it's false we won't

// * Logical operators like && and || have lower priority than math and comparison operators


// * Truthy and Falsy Values 
// * if statement doesn't work only with boolean values it can work with numbers and strings too 
// * if(value){} 

// * Falsy values are : false ; 0 ; '' (empty single string) ; NaN ; undefined ; null
// * Any value not on this list is a truthy

// * NaN means not a number, we get that if we do invalid math

// * We can use the Guard operator && as a shortcut of if condition
// * if the left side is false the code doesn't check the other part and it can be saved in a variable

// * Same goes for ternary operators

// * the default operator which is || can be used to since if the first value is true it won't check the second one and the result will be true

// * the default operator and guard operator are called short circuits because it stops early