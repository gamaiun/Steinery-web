// src/pages/login.tsx
import React, { useState } from "react"
import { auth } from "../firebase"
import { navigate } from "gatsby"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async event => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(email, password)
      navigate("/about")
    } catch (error) {
      console.error("Error logging in:", error)
      alert("Failed to log in. Please try again.")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage
