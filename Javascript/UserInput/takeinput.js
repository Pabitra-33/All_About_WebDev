input();//function declaration is hoisted, so we can call before decalaration
function input(){
    let userName = prompt("Enter UserName:");
    console.log("Entered UserName is: "+ userName);

    let passWord =  prompt("Enter Password: ");
    console.log("Entered Password by the user is: "+ passWord);
}