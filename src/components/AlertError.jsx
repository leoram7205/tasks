import React from 'react'

const AlertError = ({children}) => {
  return (
    <div className="bg-red-600 font-bold text-center uppercase text-white p-3 mb-5 rounded-md" >
        {children}
    </div>
  )
}

export default AlertError