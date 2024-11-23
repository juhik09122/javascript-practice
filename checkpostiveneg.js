// Write a JavaScript function to check if a number is positive, negative, or zero

function checkNumber(num){
    if(num >0){
        return("positive")
    } else if (num <0){
        return("negative")
    }else{
        return("zero")
    }
}
console.log(checkNumber(-11))
