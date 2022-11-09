import React from 'react'

const Registro = ({patient}) => {

  const{namePet, nameOwner, email, medicalClearance, symptom} = patient

  return (
    <div className="m-5 bg-white px-5 py-10 rounded-xl shadow-md">
        <p className=" font-bold mb-3 uppercase">
          Nombre mascota: {""}
          <span className="font-normal normal-case">{namePet}</span>
        </p>

        <p className=" font-bold mb-3 uppercase">
          Nombre propietario: {""}
          <span className="font-normal normal-case">{nameOwner}</span>
        </p>

        <p className=" font-bold mb-3 uppercase">
          email propietario: {""}
          <span className="font-normal normal-case">
          {email}
          </span>
        </p>

        <p className=" font-bold mb-3 uppercase">
          fecha alta: {""}
          <span className="font-normal normal-case"> {medicalClearance}</span>
        </p>

        <p className=" font-bold mb-3 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">
          {symptom}
          </span>
        </p>
      </div>
  )
}

export default Registro