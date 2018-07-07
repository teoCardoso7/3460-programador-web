

var Student = function (name, lastName, dni, email) {
  //----------Public----------

  this.name = name;
  this.lastName = lastName;
  this.dni = dni;
  this.email = email;
  var conocimientos = [];
  //-----------Private----------
  id = dni;
  //----------Function-----------

  this.getID = function(){
    console.log("El id es " + id);
  }

  this.getFullName = function () {
    if (Student.lastName != '') {
      console.log("Mi nombre es " + name + " " + lastName + ".");
    }
  }

this.addKnowledge = function (knowledge) {
  conocimientos.push(knowledge);
  console.log("El alumno " + name + " " + lastName + " ha aprendido " + knowledge);
}
}

var student1 = new Student('Juan', 'Perez', '45678987','juan@gmail.com');
var student2 = new Student('Juan', 'Perez2', '45678987','juan@gmail.com');
var student3 = new Student('Juan', 'Perez3', '45678987','juan@gmail.com');

student1.getFullName();
student1.getID();
//---------------Desafio parte 2------------------------
var clase = [];
clase.push(student1);
clase.push(student2);
clase.push(student3);

var Profesor = function (nombre) {
  this.nombre = nombre;

  //-----------Functions----------
  this.teach = function (knowledge) {
    for (var i = 0; i < clase.length; i++)

    clase[i].addKnowledge(knowledge);
    }
  }


var profesor1 = new Profesor ('teo');

profesor1.teach('lengua');
