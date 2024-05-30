
import {data} from './data.js'
import { students } from './global.js'
let InsertedCont = 0
let id = 0

let name$$ = document.getElementById('name')
let surname$$ = document.getElementById('surname')
let email$$ = document.getElementById('email')
let phone$$ = document.getElementById('phone')
let password$$ = document.getElementById('password')
let confirmpassword$$ = document.getElementById('Confirmpassword')
let qualification$$ = document.getElementById('qualification')

let passRadio$$ = document.getElementById('passExam')
let failRadio$$ = document.getElementById('failExam')

let localStorageBtn = document.getElementById('deleteLocalStore')

localStorageBtn.addEventListener('click', () => {
  localStorage.removeItem('students')
})

class Student {
    constructor(id, nombre, apellido, email, password, telefono, aprobado) {
      this.id = id
      this.nombre = nombre
      this.apellido = apellido
      this.email = email
      this.password = password
      this.telefono = telefono
      this.aprobado = aprobado
    }
  }
  


const registerForm = document.getElementById('registerForm')
registerForm.addEventListener('submit', (e) => {
    
    event.preventDefault()   
   
    console.log(`
    ${name$$.value} \n 
    ${surname$$.value} \n 
    ${email$$.value} 
    ${password$$.value} \n
    ${phone$$.value}  \n
    ${passRadio$$.checked} \n
    ${failRadio$$.checked} \n
    
    `);
    
    let aprobado = passRadio$$.checked
    
    const student = new Student(id++, name$$.value, surname$$.value, email$$.value, password$$.value, phone$$.value,  aprobado)

    students.push(student)    
    
    localStorage.setItem('students', JSON.stringify(students));

    confirmation.innerHTML = `
    <h3> Los datos del alumno son: </h3>
    <p> nombre: ${name.value}    </p>
    <p> surname: ${surname.value} </p>
    <p> phone: ${phone.value} </p>
    <p> password: ${password.value} </p>`    
    

})


const autoFillBtn$$ = document.getElementById('autoFill')

autoFillBtn$$.addEventListener('click', ()=> {
    
    

    console.log('>> data : ', data)
    console.log('>> InserteCount : ', InsertedCont)

    if (InsertedCont < data.length) {
      name$$.value = data[InsertedCont].nombre
      surname$$.value = data[InsertedCont].apellido
      email$$.value = data[InsertedCont].email
      phone$$.value = data[InsertedCont].telefono
      password$$.value = data[InsertedCont].password      
      InsertedCont++



      if (data[InsertedCont].aprobado) {
        passRadio$$.checked = true        
      } else {
        failRadio$$.checked = true        
      }



    }




})

