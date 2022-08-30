import { useState } from "react";

const Form = () => {
  const initialInfo = {
    namePet: "",
    nameOwner: "",
    email: "",
    medicalClearance: "",
    symptom: "",
  }

  const [info, setInfo] = useState({initialInfo})

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("sending...")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-5">
      <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>
      <p className="text-xl mt-5 mb-10 text-center">Añade pacientes y {""}
      <span className="text-pink1 font-bold">Administralos</span>
      </p> 


      <form 
      onSubmit = {handleSubmit}
      className="bg-white shodow-md rounded-lg py-10 px-5"> 
        <div className="mb-5">
          <label htmlFor="Name" className="block font-bold uppercase text-gray-700">Nombre mascota</label>
          <input
          id="Name"
          type= "text"
          placeholder="Nombre del lomito"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.namePet}
          onChange = {(e) => setInfo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="Propietario" className="block font-bold uppercase text-gray-700">Nombre propietario</label>
          <input
          id="Propietario"
          type= "text"
          placeholder="De quien es el lomito"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.nameOwner}
          onChange = {(e) => setInfo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block font-bold uppercase text-gray-700">Email del propietario</label>
          <input
          id="email"
          type= "email"
          placeholder="Email de quien es el lomito"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.email}
          onChange = {(e) => setInfo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold uppercase text-gray-700">Alta</label>
          <input
          id="alta"
          type= "date"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.medicalClearance}
          onChange = {(e) => setInfo(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">Sintomas</label>
        <textarea
        id="sintomas"
        className="border-2 w-full text-gray-400 px-2 mt-5 rounded-md"
        placeholder="Descripción general de los sintomas"
        value={info.symptom}
        onChange = {(e) => setInfo(e.target.value)}
        />
        </div>
        
        <input
        type="submit"
        className="bg-pink-300 hover:bg-pink-400 w-full p-2 rounded-lg text-white font-bold uppercase
        cursor-pointer transition-colors"
        value="Agregar paciente"
        />

      </form>
      
    </div>
  );
};

export default Form;
