import React from 'react'

const AlertError = ({valor}) => {
  return (
    <div className="bg-red-600 font-bold text-center uppercase text-white p-3 mb-5 rounded-md" >
        <p>{valor}</p> 
    </div>
  )
}

export default AlertError