// 9. Find Total Price of Items with Quantity Above 2

const cart = [
    { 
        name: "Shoes", 
        price: 500, 
        quantity: 1 
    },
    { 
        name: "Shirt", 
        price: 300, 
        quantity: 3 
    },
    { 
        name: "Pants", 
        price: 800, 
        quantity: 2 
    },
]
const totalPrice = cart
.filter(iteam => iteam.quantity>2)
//  .map (iteam => iteam.quantity)
.reduce((total,iteam) => total + iteam.price * iteam.quantity,0)
console.log(totalPrice)
