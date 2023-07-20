import { Outlet } from "react-router"
import "../Emr.scss"
import { NavLink } from "react-router-dom"

const Emr = () => {
    
  return (
    <div className="emr">
      <div className="control">

        <section>
          <img src="./vite.svg" alt="img" />

          <h2>ELECTRONIC MEDICAL RECORDS</h2>
        </section>

        <div className="nav">
          <NavLink to="/emr">Patients</NavLink>
          <NavLink to="/emr/consultation">Consultation</NavLink>
          <NavLink to="/emr/laboratory">Laboratory</NavLink>
          <NavLink to="/emr/accounts">Accounts</NavLink>
          <NavLink to="/emr/pharmacy">Pharmacy</NavLink>
          <NavLink to="/emr/reports">Reports</NavLink>
          <NavLink to="/emr/setup">Setup</NavLink>
        </div>

      </div>



      <div className="outlet">
        <nav>
          <div className="ham">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="user">

          </div>
        </nav>
        
        <Outlet />
      </div>
        
    </div>
  )
}

export default Emr 