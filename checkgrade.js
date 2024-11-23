// Write a JavaScript function that takes a student's marks as input and determines the grade:
// If the marks are 90 or above, return "Grade: A."
// If the marks are between 75 and 89, check:
// If marks are greater than 80, return "Grade: B+."
// Otherwise, return "Grade: B."
// If the marks are below 75, return "Grade: C."


function grade(marks){
    if(marks>=90){
        return("grade: A")
    }else if (marks>=75 && marks<=89){
        return("grade: B")
    }else{
        return("grade :C")
    }
}
console.log(grade(40))