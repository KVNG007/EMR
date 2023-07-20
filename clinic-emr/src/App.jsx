import React from "react"
import './App.css'
import {Routes, Route  } from "react-router"
import Login from "./Components/Login"
import Emr from "./Components/Emr"


import Patients from "./SubRoutes/Patients"
import Consultation from "./SubRoutes/Consultation"
import Laboratory from "./SubRoutes/Laboratory"
import Accounts from "./SubRoutes/Accounts"
import Pharmacy from "./SubRoutes/Pharmacy"
import Reports from "./SubRoutes/Reports"
import Setup from "./SubRoutes/Setup"

function App() {
  React.useEffect(()=> {
    console.log("we dah best")
  }, [])


  
  return (
    <div className="App">
      <Routes>
        
        <Route index path="/" element={<Login />} />

        <Route path="/emr" element={<Emr />} >
          <Route index path="/emr" element={ <Patients />} />
          <Route path="/emr/consultation" element={ <Consultation />} />
          <Route path="/emr/laboratory" element={ <Laboratory />} />
          <Route path="/emr/accounts" element={ <Accounts />} />
          <Route path="/emr/pharmacy" element={ <Pharmacy />} />
          <Route path="/emr/reports" element={ <Reports />} />
          <Route path="/emr/setup" element={ <Setup />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App;
