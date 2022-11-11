import { useState } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Patientlist from './Component/PatientList'
import {useLocalStorage} from './Hooks/useLocalStorage'

function App() {
  const [patients, setPatients] = useLocalStorage('patients', [])
  const [patient, setPatient] = useState({})
  //const [patientsLocalStorage, setPatientsLocalStorage] = useLocalStorage('patients', [])
  
  //setPatientsLocalStorage([1,2,3,4])

  const eliminatePatient = (id) =>{
    const patientsUpdate = patients.filter(patient => patient.id !== id)
    setPatients(patientsUpdate)
  }

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-2 md:flex">
      <Form 
      patients = {patients}
      setPatients = {setPatients}
      patient = {patient}
      />
      <Patientlist
      patients = {patients}
      setPatient = {setPatient}
      eliminatePatient = {eliminatePatient}


      />
    </div>
    </div>
  )
}

export default App
