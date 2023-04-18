// Create an array containing the names of 
// all items in the inventory maximum of 10.
let items=["Milk","Bread","Biscuit","Sweet","Lolipop","Groundnuts","Bigdady","Juice","Soda","Bans"]

// Create a separate array with the corresponding 
// stock quantities of each item maximum of 10.

let quantities=[10,1,3,6,8,9,3,12,43,21]

// Write a function to add a new item to 
// the inventory, updating both arrays.

function newArray(items,quantities){
    items.push("cake")
    console.log(items)


  quantities.push(5); 
  console.log(quantities)
    
}
newArray(items,quantities)
// Write a function to update 
// the stock quantity of an existing item.
function arrenon(){
    let stock= Element=>Element("Bread");


    

}
// Write a function to calculate the 
// total number of items in the inventory.
function totalArra(items){
    let itemArr=(items.length);
    console.log(itemArr)


}
totalArra(items)
// Write a function to find the item with the
//  lowest stock quantity.
let lowest=items[0];
function invent(){
   for (i=0;i<items.length;++i) {
   
    if(items[i]>lowest){
        lowest=items[i];
    }

   }
 console.log(lowest);
}
invent(items);