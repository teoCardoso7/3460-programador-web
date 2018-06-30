var gender = prompt("Please enter your gender");
var age = prompt("Please enter your age");
var pronoun;
var pronounX = 0;
if (gender == "male" || gender == "Male") {
  pronoun = "Sr. "
  pronounX++;

}
if (gender == "female" || gender == "Female") {
  pronoun = "Sra. "
  pronounX++;

}
if (pronounX == 0 ) {
  pronoun = "Srx. "

}

if (age < = 18) {
alert(pronoun + "usted es menor de edad, no puede ingresar.")

} else {
  alert(pronoun + "usted es mayor de edad, puede pasar.")
}
