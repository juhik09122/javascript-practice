// Write a JavaScript function that takes two numbers as input and checks:
// If both numbers are even, return "Both numbers are even."
// If one number is even and the other is odd, return "One number is even, and one is odd."
// If both numbers are odd, return "Both numbers are odd."

function checkEvenOrOdd(a,b){
    if(a %2==0 && b%2==0 ){
        return("both  numbers are even")
    }else if ((a%2==0 && b%2!=0) || (a%2!=0 && b%2==0)){
        return("one number is even , and one is odd")
    }else{
        return("both number are odd")
    }
}
console.log(checkEvenOrOdd(3,7))