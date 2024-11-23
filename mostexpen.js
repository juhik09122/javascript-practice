// 6. Find the Most Expensive Product
// const products = [
//     { name: "Table", price: 200 },
//     { name: "Chair", price: 150 },
//     { name: "Couch", price: 800 },
//     { name: "Bed", price: 1000 },
// ];

const products = [
    { 
        name: "Table", 
        price: 200
     },
       { name: "Chair", 
        price: 150 
    },
     { name: "Couch", 
        price: 800 
    },
     {
         name: "Bed", 
        price: 1000 
    }

     ];

    const mostExpensiveProduct= products.filter(element => element.price).map(element => element.price).reduce((x,y) => x+y,0);
    console.log(mostExpensiveProduct)