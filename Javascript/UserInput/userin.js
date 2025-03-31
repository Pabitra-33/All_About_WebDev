addTwoValue();
function addTwoValue() {
    //prompt function always takes the input in String format.
    //so to change it to number we need to use Constructor number.
    let n1 = Number(prompt("Enter first number: "));
    let n2 = Number(prompt("Enter second number: "));

    //used the string literal to print the sum with expression
    console.log(`${n1} + ${n2} = ${n1+n2}`);
}