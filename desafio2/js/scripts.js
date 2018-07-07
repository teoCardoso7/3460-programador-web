var gender = prompt("Please enter your gender").toLowerCase;
var age = prompt("Please enter your age");
var pronoun;
if (gender == "male") {
  pronoun = "Sr. "
}
if (gender == "female") {
  pronoun = "Sra. "
} else {
  pronoun = "Srx. "
}

if (age < = 18) {
alert(pronoun + "usted es menor de edad, no puede ingresar.")

} else {
  alert(pronoun + "usted es mayor de edad, puede pasar.")
}
