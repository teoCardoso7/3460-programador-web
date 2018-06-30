console.log('este es un console log')

//----------Ejercicios--------------
//------Ejercicio 1-----------------
for (i=0; i<=250; i++) {
    console.log(i)

}
//---------Ejercicio 2------------
var i = 10
while (i <250 ){
    if(i%3==0){
        console.log(i);
    };
    i++
};
//---------------Ejercicio 3-----------
var a = prompt("Ingresa tu nombre")

alert("Bienvenido" + " " + a + ".")

//-----------Ejericio 4-------------

var num = prompt("Como estuvo tu dia "+ a + "?")

if ( num <= 5) {
  alert("Vuelva otro dia " + a + ".")


}
  if (num > 5 && num < 20){
    alert ("Que tenga un pesimo dia " + a + ".")

}
  if(num >= 20){
    alert("Que tenga un dia increible " + a + "." )
  }

// menor a 5 entre 5 y 20 y 20


var semanaArray = ["Lunes","Martes", "Miercoles", "Jueves","Viernes","Sabado","Domingo"];
var nombreUsuario = prompt("Por favor ingrese su nombre");
var numeroUsuario = prompt("Ingrese un numero del 1 al 100 por favor");

if (numeroUsuario >=1 && numeroUsuario <=100) {
  alert(numeroUsuario);

} else {
  nombreUsuario = prompt("Vuelva a ingresar un numero del 1 al 100");
  if () {

  }
}
