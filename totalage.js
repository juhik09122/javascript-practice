// 1. Calculate the Total Age of People Above 30 javascript
// Copy code
// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 35 },
//     { name: "Mark", age: 40 },
//     { name: "Lucy", age: 29 },
// ];


const people =[
    {
        name :"johan",
        age : 25
    },

    {
        name :"jane",
        age : 35
    },

    {
        name :"mark",
        age : 40
    },

    {
        name :"lucy",
        age : 29
    }
]

// const totalAge = people.filter(element => element.age>30)
// .map(element => element.age)
// .reduce((total,element) => total + element.age,0);
// console.log(totalAge);

function totalAge(arr){
    let ageAbove=[]

    for(let index=0; index < arr.length; index++){
        if(arr[index].age>=30){
            ageAbove.push(arr[index])
        }
      
    }
    return ageAbove
}
console.log(totalAge(people))




