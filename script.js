const tip = document.querySelectorAll('.tip');
const errorSpanBill = document.querySelector('.bill-error');
const errorSpanPeople = document.querySelector('.people-error');
const inputTotalBill = document.getElementById('input-total-bill');
const inputTotalPeople = document.getElementById('input-total-people');
const inputCustomTip = document.getElementById('input-custom-tip');
const tipPerPerson = document.getElementById('tip-per-person');
const totalPerPerson = document.getElementById('total-per-person');
const resetButton = document.getElementById('reset-button');
let totalPeople = 1;
let totalBill = 0;
let tipPercentage = 0.15;
function calculateTip(){
     if(totalPeople >= 1){
          let totalTipPerPerson = (totalBill * tipPercentage) / totalPeople;
          let totalBillPerPerson = (totalBill / totalPeople) + totalTipPerPerson;
          tipPerPerson.innerHTML = '$' + (totalTipPerPerson).toFixed(2);
          totalPerPerson.innerHTML = '$' + (totalBillPerPerson).toFixed(2);
     }
}
function reset(){
     tipPerPerson.innerHTML = '$' + (0).toFixed(2);
     totalPerPerson.innerHTML = '$' + (0).toFixed(2);
     inputTotalBill.value = "";
     inputTotalPeople.value = "";
     inputCustomTip.value = "";
     tip.forEach(value => {
          value.classList.remove('selected-tip');
     });
}
function tipInputFunction(){
     tipPercentage = parseFloat(inputCustomTip.value / 100);
     tip.forEach(function(value){
          value.classList.remove('selected');
     });
     calculateTip();
}
function billInputFunction(){
     totalBill = parseFloat(inputTotalBill.value);
     errorSpanBill.style.display = 'none';
     inputTotalBill.classList.remove('error-input');
     if(inputTotalBill.value == 0 && inputTotalBill.value != ""){
          errorSpanBill.style.display = 'flex';
          inputTotalBill.classList.add('error-input');
     }
     calculateTip();
}
function peopleInputFunction(){
     totalPeople = parseInt(inputTotalPeople.value);
     errorSpanBill.style.display = 'none';
     inputTotalPeople.classList.remove('error-input');
     if(inputTotalPeople.value == 0 && inputTotalPeople.value != ""){
          errorSpanPeople.style.display = 'flex';
          inputTotalPeople.classList.add('error-input');
     }
     calculateTip();
}
function selectTip(event){
     tip.forEach(function(value){
          value.classList.remove('selected-tip');
          if(event.target.innerHTML == value.innerHTML){
               value.classList.add('selected-tip');
               tipPercentage = parseFloat(value.innerHTML) / 100;
          }
     });
     calculateTip();
}
tipPerPerson.innerHTML = '$' + (0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0).toFixed(2);
inputTotalBill.addEventListener('input',billInputFunction);
inputTotalPeople.addEventListener('input',peopleInputFunction);
inputCustomTip.addEventListener('input',tipInputFunction);
resetButton.addEventListener('click',reset);
tip.forEach(function(value){
     value.addEventListener('click',selectTip);
});