import React, { useState } from "react"

export const Form = () => {
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault();

    alert('Enviando Tarea ...😎 ')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Creación de Tareas</h2>
      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5" action="">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="title">Titulo</label>
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} id="title" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" type="text" placeholder="Titulo de la tarea" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Fecha</label>
          <input value={fecha} onChange={(e) => setFecha(e.target.value)} id="fecha" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" type="date" placeholder="Fecha de la tarea" />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="descripcion">Descripción</label>
          <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} id="descripcion" className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400" type="text" placeholder="Descripción de la tarea" />
        </div>
       <input type="submit" className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer" value="Crear Tarea"/>
      </form>
    </div>
  )
}
