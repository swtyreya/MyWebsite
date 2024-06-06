function calc1(num1,num2){
  return Number(num1)+Number(num2);
}
function calc2(num1,num2){
  return Number(num1)-Number(num2);
}
function subtract(){
let num1=document.getElementById("diff1").value;
let num2=document.getElementById("diff2").value;
let result= calc2(num1,num2);
document.getElementById("diff3").value=result;
}
function calc3(num1,num2){
  return Number(num1)*Number(num2);
}
function multiply(){
let num1=document.getElementById("pro1").value;
let num2=document.getElementById("pro2").value;
let result= calc3(num1,num2);
document.getElementById("pro3").value=result;
}
function calc4(num1,num2){
  return Number(num1)/Number(num2);
}
function divide(){
let num1=document.getElementById("quo1").value;
let num2=document.getElementById("quo2").value;
let result= calc4(num1,num2);
document.getElementById("quo3").value=result;
}