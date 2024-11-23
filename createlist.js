// 8. Create a List of Items and Their Prices (increased by 10%)

const items = [
    { 
        name: "Book", 
        price: 100 
    },
    { 
        name: "Pen", 
        price: 20 
    },
    { 
        name: "Pencil", 
        price: 10 
    },
]
const itemPerice = items
.filter(iteam => iteam.name,)
.map(iteam =>({
    name :iteam.name,
    price: iteam.price*1.1

}));
console.log(itemPerice)
