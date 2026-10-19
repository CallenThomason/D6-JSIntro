console.log("The truck is open!"); 

// string truckName = "Isaiah's Taco Truck";

const TruckName = "Isaiah's Taco Truck"; 

const price = 3.50; 
console.log(price); 

let tacosSoldToday = 0; 
tacosSoldToday = tacosSoldToday + 1; 
tacosSoldToday++; 
console.log(tacosSoldToday); 

/*
public string sum(int num1, int num2){

return "The sum is: " + (num1 + num2); 
}
*/
function sum( num1, num2)
{
    return `The sum is: ${num1 + num2}`; 
}

const menuItems = ["Carne Asada", "El Pastor", "Birria, when we have it", "just the meat"];

console.log(menuItems.length); 
console.log(menuItems[0]); 

const carneAsada = {
    name: "Carne Asada",
    price: 3.50, 
    spicy: false,
    toppings: ["Onion", "Cilantro", "salsa"]
};

console.log(carneAsada.name); 

const isaiahOrder = {
    name: "Just the meat",
    price: "3.00",
    spicy: false, 
    toppings: []
}

console.log(isaiahOrder.toppings); 
console.log(isaiahOrder.toppings.length); 

// for(int i = 1; i < 6; i++)
//     {
//     console.WriteLine(i);
// }

for(let i = 1; i < 6; i++){
    console.log(i);
}
for(let i = 0; i < menuItems.length; i++){
    console.log(menuItems[i]); 
}

function describe(dish){
    let line = dish.name + " is $" + dish.price; 
    if(dish.Spicy){
        line = line + " (Bring a napkin) ";
    }
    return line; 
}

const menu = [
  { name: "Carne asada", price: 3.50, spicy: false, toppings: ["onion", "cilantro", "salsa"] },
  { name: "Al pastor", price: 3.75, spicy: true, toppings: ["onion", "cilantro", "pineapple"] },
  { name: "Birria, when we have it", price: 4.50, spicy: false, toppings: ["onion", "cilantro", "consome"] },
  { name: "Just the meat", price: 3.00, spicy: false, toppings: [] }
];

for(let i = 0; i < menuItems.length; i++){
    console.log(describe(menu[i])); 
}