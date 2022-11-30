import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./login.css"
import axios from "axios"

export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()
  const {user, dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axios.post("/auth/login", {
        username : userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
    dispatch({type: "LOGIN_FAILURE"})
    }
  }
  console.log(user);
  return (
    <div className="login">
    <span className="logintitle">Login</span>
      <form className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="logininput" type="text" placeholder="Username" ref = {userRef}/>
        <label>Password</label>
        <input className="logininput" type="password" placeholder="Password" ref = {passwordRef}/>
        <button className="loginbtn" type="submit" disabled= {isFetching}>Login</button>
        <button className="loginregisterbtn"><Link className="link" to= "/register">Register</Link></button>
      </form>
    </div>
  )
}
