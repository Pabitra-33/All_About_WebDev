main();
function main() {
    sum(11,2,3);
    sum(11,3);
    sum(1,3,5,7);
    sum(21,34,56);
}

//rest operator makes a function to hold any no of values.
function sum(...arr)
{
    let Sum = 0;
    for(let i =0; i<arr.length; i++) {
        Sum += arr[i]
    }
    console.log(Sum);
}