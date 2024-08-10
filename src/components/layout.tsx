import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
