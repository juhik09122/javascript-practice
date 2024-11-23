// 5. Get the Names of People with Odd Ages
// const people = [
//     { name: "Tom", age: 25 },
//     { name: "Jerry", age: 22 },
//     { name: "Spike", age: 35 },
// ];

 const people =[
    {
        name: "Tom", 
         age: 25 
    },

    { 
        name: "Jerry", 
        age: 22 
    },

    { 
        name: "Spike", 
        age: 35 
    },
 ]

//  const oddAgeNames = people
//     .filter(person => person.age % 2 !== 0)                 
//     .map(person => person.name);          

// console.log(oddAgeNames);

function oldAgeNames(arr){
    const oldAge=[];
    for(let index=0; index < arr.length; index++){
        if(arr[index].age % 2 !==0){
            oldAge.push(arr[index].name)

        }
    }
    return oldAge
}
console.log(oldAgeNames(people))