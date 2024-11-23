// Write a JavaScript function that takes three numbers as input, calculates their sum, and checks if the sum is greater than 15. Use an if-else statement to return an appropriate message indicating whether the sum is greater than 15 or not.

function number(a,b,c){
    if (a+b+c > 15){
        return("sum is greater than ")
    } else {
        return("not")
    }
}
console.log(number(1,1,6))