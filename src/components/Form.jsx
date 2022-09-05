import React, { useEffect, useState } from "react"
import AlertError from "./AlertError"

export const Form = ({tarea, tareas, setTareas, setTarea }) => {
  // const id:string  = '';
  const [titulo, setTitulo] = useState('')
  const [fecha, setFecha] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(tarea).length > 0){
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea])
  

  const generarId = () => Math.random().toString(20).substring(2);

  const handleSubmit = (e)=> {
    e.preventDefault();

    if([titulo, fecha, descripcion].includes('')){
      setError(true);
      return;
    }

    setError(false);

    const objTareas = {
      titulo,
      fecha,
      descripcion,
    };

    if(tarea.id){

        objTareas.id = tarea.id;
        const tareasActualizadas = tareas.map(tareaState =>
          tareaState.id === tarea.id ? objTareas : tareaState
        )
        setTareas(tareasActualizadas);
        setTarea({});
    }else{
        objTareas.id = generarId();
        setTareas([...tareas, objTareas]);
    }
    setTitulo('');
    setFecha('');
    setDescripcion('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-10">Creación de Tareas</h2>
      <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5" action="">
        {error && 
          <AlertError>
            <p>Faltan campos por diligenciar</p>
          </AlertError> 
        }
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
        {!tarea.id ? (
            <input type="submit" className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-700 transition-colors cursor-pointer" value="Crear Tarea"/>
        ):(
          <input type="submit" className="bg-green-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-green-700 transition-colors cursor-pointer" value="Actualizar Tarea"/>
        )}
       
      </form>
    </div>
  )
}
