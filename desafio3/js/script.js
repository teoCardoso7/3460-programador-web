var operation = prompt("Por favor ingrese operacion a realizar (sum, res, mul, div).").toLowerCase();
alert("Caso de no ingresar numero el valor predeterminado sera 0.")
var num1 = 0;
var num2 = 0;
var result;



if (operation == "sum") {
  num1 = prompt("Por favor ingrese un numero");
  num2 = prompt("Por favor ingrese otro numero");
  result = num1+num2;
  alert(result);

}
if (operation == "res") {
  num1 = prompt("Por favor ingrese un numero");
  num2 = prompt("Por favor ingrese otro numero");
  result = num1-num2;
  alert(result);

}
if (operation == "mul") {
  num1 = prompt("Por favor ingrese un numero");
  num2 = prompt("Por favor ingrese otro numero");
  result = num1*num2;
  alert(result);

}
if (operation == "div") {
  num1 = prompt("Por favor ingrese un numero");
  num2 = prompt("Por favor ingrese un numero distinto a 0")
  while (num2 == 0){
    alert("Es imposible la division con 0 vuelva a ingresar el divisor")
    num2 = prompt("Por favor ingrese un numero distinto a 0");
  }
  result = num1%num2;
  alert(result);

}
