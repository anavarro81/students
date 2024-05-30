const students$$ = document.getElementById('student-data')

const tableHTMLStart = `
<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Acciones </th>
        </tr>
    </thead>
    <tbody id="alumn-info">
` 

const students = localStorage.getItem('students');
const studentsArray = JSON.parse(students); 
let prevBtnId = ""

function failExam(id) {

    // const student_id = event.target.value

    console.log('Voy a suspender a...', studentsArray[id].nombre);
    studentsArray[id].aprobado = false    
    console.log('Datos de Maria ', studentsArray[id]);

    
}


document.addEventListener('DOMContentLoaded', () => {       

    
    
    if (students) {
                      

        let tableHTML = tableHTMLStart
        
        for (const student of studentsArray) {    
            
            tableHTML += "<tr>"            
            tableHTML += `<td> ${student['nombre']}  </td>`
            tableHTML += `<td> ${student['apellido']}  </td>`
            tableHTML += `<td> <button id='${student['id']}' name='showStudent'>Mostrar</td>`            
            tableHTML += `<td> <button id='${student['id']}' name='failButton'>Suspender</td>`
            tableHTML += "</tr>"   


        }        
        students$$.innerHTML = tableHTML + '</tbody> </table>'
        
        
         const showStudentBtns$$ = document.getElementsByName('showStudent')
         
         const failBtn$$ = document.getElementsByName('failButton')         
  
         failBtn$$.forEach(button => {
            button.addEventListener('click', (event) => failExam(event.target.id))
         })

        showStudentBtns$$.forEach(button => {
            button.addEventListener('click', (event) => {
                
                
                const id =   event.target.id 

                console.log('id: ', id);
                console.log('prevBtnId: ', prevBtnId);

                
                
        // Muetra | Oculta la info del estudiante segun tenga o no las clases hide | show. 
        // Cambiar el texto del boton entre "Mostrar" y "Ocultar" segun corresponda.         
                const studentInfo$$ = document.getElementById('student-info')

                // Si pulso mostrar y esta visible 
                // button.innerHTML = 'mostrar'

                
                    console.log('button.innerHTML>', button.innerHTML);

                    console.log(typeof prevBtnId);
                    console.log('id: ', id )
                    console.log('prevBtnId: ', prevBtnId)


                    if (id != prevBtnId) {                                              
                        
                        if (prevBtnId > "") {
                            const prevBtn$$ = document.getElementById(prevBtnId)
                            prevBtn$$.innerHTML = 'Mostrar'     
                        }
                        prevBtnId = id
                        
                    }
                    
                    if (button.innerHTML == 'Mostrar') {

                        console.log('Entro en 1');
                        
                        if (!studentInfo$$.classList.contains('visible')) {
                            studentInfo$$.classList.remove('hide')
                            studentInfo$$.classList.add('visible')
                            button.innerHTML = 'Ocultar'
                        } else {
                            button.innerHTML = 'Ocultar'
                        }


                    } else {
                        studentInfo$$.classList.remove('visible')
                        studentInfo$$.classList.add('hide')
                        button.innerHTML = 'Mostrar'

                    }
                
                let studentInfoHTML = ""                

                const student = studentsArray[id]

                for (const key in student) {
                    if (key != 'id') {
                        studentInfoHTML = studentInfoHTML + `<p> <b> ${key}: </b> ${student[key]} </p>` 
                        
                    }
                }

                studentInfo$$.innerHTML = studentInfoHTML
                console.log(studentsArray[event.target.id]);



            })
        })

    }

    
})           


