import {useEffect} from 'react'
import Registro from "./Registro";

const Patientlist = ({patients, setPatient, eliminatePatient}) => {

  useEffect(() => {
    {patients.length > 0 && console.log("Se ha agregado un nuevo paciente")} 
  },[patients])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {patients && patients.length ? 
      <>
      <h2 className="font-black text-3xl text-center mx-auto ">
        Listado pacientes
      </h2>
      <p className="text-center mt-5 mb-10 text-xl">
        Administra tus {""}
        <span className="font-bold text-pink1">Pacientes y citas</span>
      </p>
      {patients.map( patient =>(
        <Registro
        key ={patient.id}
        patient = {patient}
        setPatient = {setPatient}
        eliminatePatient = {eliminatePatient}
        />
      ))}
      </>
      :
      <>
      <h2 className="font-black text-3xl text-center mx-auto ">
        No hay pacientes aún
      </h2>
      <p className="text-center mt-5 mb-10 text-xl">
        comienza agregando pacientes {""}
        <span className="font-bold text-pink1">Y apareceran aquí</span>
      </p>
      </>
      }
    </div>
  );
};

export default Patientlist;
