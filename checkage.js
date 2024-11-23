// Question 2:
// Write a JavaScript function that takes a person's age as input and determines:

// If the person is under 13, return "You are a child."
// If the person is between 13 and 19 (inclusive), return "You are a teenager."
// If the person is 20 or older, return "You are an adult.


function checkAge(age){
    if(age<13){
        return("you are a child")
    }else if (age >=13 && age<=19){
        return("you are a teenager")
    }else {
       return("you are an adult")
    }
}

console.log(checkAge(24))