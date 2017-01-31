$(document).ready(function(){
    $('.slider').slider();
});

$(".button-collapse").sideNav();


let choices = document.getElementsByClassName("menuChoice");
let body = document.getElementById("table");
console.log(burger);

Array.from(choices).forEach(function(element){
  element.addEventListener('click', addToTable)
})

function addToTable(){
  let selectRow = document.createElement("tr");
  let selectItem = document.createElement("td");
  let selectPrice = document.createElement("td");
  selectItem.innerText = this.name; //refers to event listener
  selectPrice.innerText = this.value;
  console.log(selectItem);
  selectRow.appendChild(selectItem);
  selectRow.appendChild(selectPrice);
  body.appendChild(selectRow);
  total(this.value);
};

let sum = 0;        //global variable so form doesn't reset to latest entry
let calculateTax = 0;  //global variable so totalCost doesn't reset
function total(value){
  var foodCost = Number(value);
  console.log(this.value);
  let subtotal = document.getElementById('subtotal');
  let tax = document.getElementById('tax');
  let total = document.getElementById('total');
  sum += foodCost;
  calculateTax = (foodCost * 0.10);
  totalCost = sum + calculateTax;
  subtotal.innerText = sum.toFixed([2]);
  tax.innerText = calculateTax.toFixed([2]);
  total.innerText = totalCost.toFixed([2]);
}


function checkItems() {
   var name= document.getElementById('name').value;
   console.log(name);
   var phone= document.getElementById('phone').value;
   var address= document.getElementById('address').value;
   if(name =="" || phone == "" || address == ""){
       alert('please fill in all fields');
       return false;
   }
  else {
    alert("Thank You for Your Order.");
    return true;
  }
}
