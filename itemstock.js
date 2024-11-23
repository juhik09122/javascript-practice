// 3. Count the Number of Items in Stock javascript
// Copy code
// const products = [
//     { name: "Laptop", price: 1000, inStock: true },
//     { name: "Mouse", price: 50, inStock: false },
//     { name: "Keyboard", price: 70, inStock: true },
//     { name: "Monitor", price: 300, inStock: false },
// ];


const products =[
    {
        name : "laptop",
        pricee : 1000,
        inStock : true
    },
    {
        name : "mouse",
        pricee : 50,
        inStock :false
    },
    {
        name : "keybord",
        pricee : 70,
        inStock : true
    },
    {
        name : "monitor",
        pricee : 300,
        inStock : false
    }
];

// const iteamStock = 
// products.filter (element => element.inStock ).length
// .reduce((x,y)=> x+y,0);
// console.log(iteamStock)


 function countIteamStock(arr){
    let countNum=0;
    for(let index =0; index < arr.length; index++){
        if (arr[index].inStock){
            countNum ++;
        }
    }
    return countNum;
 }
 console.log(countIteamStock(products));