import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({setPatients, patients, patient}) => {

  const generateId = () =>{
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date
  }
  
  const initialInfo = {
    namePet: "",
    nameOwner: "",
    email: "",
    medicalClearance: "",
    symptom: "",
  }

  useEffect(() =>{
    {Object.keys(patient).length > 0 &&
    setInfo(patient)
    }
  },[patient])

  const [info, setInfo] = useState(initialInfo)

  const[error, setError] = useState(false)
  
  const handleInputChange = (event) =>{
    setInfo({
      ...info,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    //validation of form 
    if([info.namePet,
        info.nameOwner,
        info.email,
        info.medicalClearance,
        info.symptom].includes('')){
        //console.log("Hay al menos un elemento vacio")
        setError(true)
    }else{
      
      setError(false)
      if(patient.id){
        //Editar registro
        info.id = patient.id
        const patientsUpdate = patients.map(patientState => patientState.id === 
          patient.id ? info : patientState)
          setPatients(patientsUpdate)
      }else{
        //Nuevo registro
        info.id = generateId()
        setPatients([...patients, info])
      }      
      //reiniciar el formulario
      setInfo(initialInfo)

    }
    
    
    
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

      {error && 
      <Error
      mensaje = {"Todos los campos son obligatorios"}/>
      }

        <div className="mb-5">
          <label htmlFor="Name" className="block font-bold uppercase text-gray-700">Nombre mascota</label>
          <input
          id="Name"
          type= "text"
          placeholder="Nombre del lomito"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.namePet}
          name = "namePet"
          onChange = {handleInputChange}
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
          name = "nameOwner"
          onChange = {handleInputChange}
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
          name = "email"
          onChange = {handleInputChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block font-bold uppercase text-gray-700">Alta</label>
          <input
          id="alta"
          type= "date"
          className="border-2 w-full rounded-lg text-gray-400 px-2 mt-2"
          value={info.medicalClearance}
          name = "medicalClearance"
          onChange = {handleInputChange}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700">Sintomas</label>
        <textarea
        id="sintomas"
        className="border-2 w-full text-gray-400 px-2 mt-5 rounded-md"
        placeholder="Descripción general de los sintomas"
        value={info.symptom}
        name = "symptom"
        onChange = {handleInputChange}
        />
        </div>
        
        <input
        type="submit"
        className={patient.id ? ("bg-green-300 hover:bg-green-400 w-full p-2 rounded-lg text-white font-bold uppercase cursor-pointer transition-colors") : ("bg-pink-300 hover:bg-pink-400 w-full p-2 rounded-lg text-white font-bold uppercase cursor-pointer transition-colors")}
        value={patient.id ? "Editar paciente" : "Agregar paciente"}
        />

      </form>
      
    </div>
  );
};

export default Form;
