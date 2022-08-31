import React from 'react';
import { Tareas } from './Tareas';

export const ListaTareas = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 mt-10 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center mb-10">Lista de Tareas</h2>

      <Tareas/>
      <Tareas/>
      <Tareas/>
      <Tareas/>
      <Tareas/>
    </div>
  )
}
