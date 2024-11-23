// Question 1:
// Write a JavaScript function that takes three numbers as input, calculates their sum, and checks:

// If the sum is greater than 20, return "The sum is very high."
// If the sum is between 10 and 20 (inclusive), return "The sum is moderate."
// Otherwise, return "The sum is low."

function checkSum(a,b,c){
    let sum=a+b+c;
    if(sum > 20){
        return ("this sum is very high")
    }else if (sum>=10 && sum<=20){
        return("the sum is moderate")

    } else {
        return("the sum is low")
    }
    }
   console.log( checkSum(10,20,30))
