// 2.Find Names of All Students Who Scored Above 80 javascript
// Copy code
// const students = [
//     { name: "Alice", score: 70 },
//     { name: "Bob", score: 85 },
//     { name: "Charlie", score: 90 },
//     { name: "David", score: 60 },
// ];

const student  =[
    {
        name:"Alice",
        score: 70
    },
    {
        name:"Bob",
        score:85
    },
    {
        name:"Charlie",
        score:90
    },
    {
        name:"David",
        score:60
    }
    
]

// const allStu = student.filter (element => element.score>80).map(element => element.name);
// console.log(allStu)

function allStu(arr){
    let score=[]
    for(let index=0; index<arr.length; index++){
        if(arr[index].score>=80){
            score.push(arr[index])
        }
    }
    return score
}
console.log(allStu(student))

