logical();
function logical() {
    let a = 7;
    let b = 4;
    console.log(a<b && a++>2);//false, so 2nd expression won't execute.
    console.log(a);//7
    console.log(b);//4
    console.log("-----Bitwise Operation------")
    bitwise();
}
        
function bitwise() {
    let x = 5;
    let y = 6;
    console.log(x & y);
    console.log(x | y);
    console.log(x ^ y);
}