import React from 'react'
import editar from "../assets/editar.svg"
import borrar from "../assets/trash-4-512.svg"

export const Tareas = ({tarea, setTarea, eliminarTarea}) => {

  const {id, titulo, fecha, descripcion} = tarea

  const handleEliminar = () =>{
    const respuesta = confirm('¿Desa eliminar está tarea? 🤔')
    if(respuesta) eliminarTarea(id);
  }

  return (
    <div className='bg-white shadow-md px-5 py-10 rounded-lg mt-5' >
        <p className='font-bold mb-3 text-gray-700 uppercase'>Titulo: {' '}
        <span className='font-normal normal-case'>{titulo}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {' '}
        <span className='font-normal normal-case'>{fecha}</span></p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Descripción: {' '}
        <span className='font-normal normal-case'>{descripcion}</span></p>

        <div className='flex flex-row justify-around mt-5'>
          
          <button onClick={()=> setTarea(tarea) }>
          <img src={editar}/>
          </button>
          <button onClick={handleEliminar }>
            <img src={borrar}/>
          </button>
        </div>
    </div>
  )
}
