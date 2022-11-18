//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName:"Cold Brew", 
    sugars: 2, 
    ready: false
}

console.log(customerOrder.drinkName);
console.log(customerOrder.sugars);

if (customerOrder.ready === true) {
    console.log("Ready for pick-up")
}

else {
    console.log("Stil in order queue");
}