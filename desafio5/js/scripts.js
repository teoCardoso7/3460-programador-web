function Student(name, lastName, dni, email) {
  //----------Public----------

  this.name = name;
  this.lastName = lastName;
  this.dni = dni;
  this.email = email;
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
}

var student1 = new Student('Juan', 'Perez', '45678987','juan@gmail.com');

student1.getFullName();
student1.getID();
