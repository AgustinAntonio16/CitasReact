import { useState } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Patientlist from './Component/PatientList'

function App() {
  const [patients, setPatients] = useState([])

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-2 md:flex">
      <Form 
      patients = {patients}
      setPatients = {setPatients}
      />
      <Patientlist
      patients = {patients}
      />
    </div>
    </div>
  )
}

export default App
