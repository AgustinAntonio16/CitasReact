const Registro = ({patient, setPatient, eliminatePatient}) => {
  
  const{namePet, nameOwner, email, medicalClearance, symptom, id} = patient

  const handleEliminete = () => {
    const confirmation = confirm("Esta seguro que desea eliminar al paciente: " + namePet)}
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

        <div className='flex justify-center'>
          <button className ='bg-indigo-600 hover:bg-indigo-500 text-white font-bold font-Quicksand uppercase px-10 py-2 mr-5 rounded-lg'
          onClick={() => setPatient(patient)}
          >
            Editar
          </button>

          <button className='bg-red-600 hover:bg-red-500 text-white font-bold font-Quicksand uppercase px-10 py-2 ml-5 rounded-lg'
          onClick={handleEliminete}
          >
            Eliminar
          </button>

        </div>

      </div>
  )
}

export default Registro