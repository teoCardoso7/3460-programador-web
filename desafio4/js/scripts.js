var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var searcher = prompt("Ingrese nombre o apellido del alumno a buscar.");
var position = 0;

for (var i = 0; i < studentsList.length; i++) {

  if (studentsList[i].firstName == searcher || studentsList[i].lastName == searcher) {
    position = i;
    if (position == 0) {
        console.log("No se ha encontrado el alumno -1");


    }else {
    console.log("Se ha encontrado el alumno en la posicion " + position);
    }
  }


}
