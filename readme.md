Actividad 3
Alta de estudiante
Crear un formulario que permita ingresar la información de un estudiante.
Luego, escuchar el evento submit sobre el form, capturando las entradas, e invocar un objeto Estudiante usando los valores ingresados, y asociar la instancia a un array de estudiantes.
Por último, disparar una salida en el HTML, amodo de confirmación de los datos registrados.
Notas actividad 3
Se reconoce como ‘alta’ al proceso de registro de información en un sistema. Recordemos que en el evento submit empleamos preventDefault, para evitar el reinicio de la página.


Actividad 4
Listar estudiantes
Usando el array de estudiantes creado en laactividad 3, iterar la colección creando una etiqueta div, cuya estructura interna detalle la información del estudiante, y contenga unbotón ‘Seleccionar’, agregando cada estructura al body.
Luego, detectar el click sobre el botón, especificando al usuario los datos del alumno seleccionado.
Notas actividad 4
Cuando queremos asociar eventos a elementos generados de forma dinámica, esrecomendable realizar esta operación una vez concluida la inserción de los nuevos elementos al DOM.


Alta de estudiante. 
Listar estudiantes. 

5. Suspender Estudiante. 

Agregar un botón "Suspender" a cada estudiante
Mostrar un mensaje para indicar que se ha suspendido al estudiante. 


                <tr>
                    <td>Juan</td>
                    <td>Pérez</td>
                    <td>123-456-7890</td>
                    <td>juan.perez@example.com</td>
                    <td>Sí</td>
                </tr>


tableHTML-star = `


<table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Acciones </th>
                </tr>
            </thead>
`         
                        <tbody id="alumn-info">
            </tbody>

        </table>        
