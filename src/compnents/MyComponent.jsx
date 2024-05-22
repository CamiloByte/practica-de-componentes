import React from 'react'

export const MyComponent = () => {

const name = "Inés";
const repository = "https://github.com/inesmariao/component-practice.git"

const student = {
    name: "Cristian",
    lastName: "Aranda",
    mibile: "324676855",
    linkedinprofile:"www.linkedin.com/in/cristian-camilo-aranda"

}

return (
    <div>
        <hr/>
         <p>Este es mi primer componente</p>
         <h2>Tema de react </h2>
         <ul>
            <li>Componente</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicación</li>
         </ul>
         <hr />
         <h2>Datos del Docente</h2>
         <p>Nombre: {name}</p>
         <p>{repository}</p>
         <hr />
         <h2>Datos del Estudiante</h2>
         <p>Nombre: {JSON.stringify(student)}</p>
         <p>Nombre: {student.name}</p>
         <p>Apellido: {student.lastName}</p>
         <p>Mobile: {student.mibile}</p>
         <p>Linkedin: {student.linkedinprofile}</p>

    </div>
  )
}
