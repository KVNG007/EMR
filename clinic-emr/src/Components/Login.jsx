import { NavLink } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <main>
        <form>
          <h2>LOGIN</h2>
        
            <input className="input" type="text" placeholder="Username" />

            <input className="input" type="text" placeholder="Password" />

            <section>
              <aside>
                <input type="checkbox" />
                <small>Remember me</small>
              </aside>
              <a rel="stylesheet" href="./"><small>forgot password?</small></a>
            </section>

            <NavLink className="log" to="/emr">Login </NavLink>

        </form>
      </main>
    </div>
  )
}

export default Login