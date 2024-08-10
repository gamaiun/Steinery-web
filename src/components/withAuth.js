// src/components/withAuth.js
import React, { useEffect, useState } from "react"
import { auth } from "../firebase"
import { navigate } from "gatsby"

const withAuth = Component => {
  const AuthenticatedComponent = props => {
    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setAuthenticated(true)
        } else {
          navigate("/login") // Redirect to login if not authenticated
        }
        setLoading(false) // Whether user is authenticated or not, stop loading
      })

      // Cleanup the subscription on unmount
      return () => unsubscribe()
    }, [])

    if (loading) {
      return <div>Loading...</div> // Provide feedback while checking auth status
    }

    if (!authenticated) {
      return null // Optionally return a null or loading indicator while navigating
    }

    return <Component {...props} />
  }

  return AuthenticatedComponent
}

export default withAuth
