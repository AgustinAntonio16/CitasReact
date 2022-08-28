import { useState } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Patientlist from './Component/PatientList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <Header/>
    <Form/>
    <Patientlist/>
    </div>
  )
}

export default App
