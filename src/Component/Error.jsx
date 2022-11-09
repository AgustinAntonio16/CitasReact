import {useState, useEffect} from 'react'

const Error = ({mensaje}) => {
  return (
    <h1 className = "bg-red-600 rounded-lg uppercase font-bold text-center text-white px-2 py-2 mb-3">
        {mensaje}
      </h1>
  )
}

export default Error