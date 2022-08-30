import { useState } from 'react'

import Header from './Component/Header'
import Form from './Component/Form'
import Patientlist from './Component/PatientList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-8 md:flex">
      <Form/>
      <Patientlist/>
    </div>
    </div>
  )
}

export default App
