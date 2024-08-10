import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Wrapper = styled.div`
  /* padding-bottom: 100px; */
  background: linear-gradient(
    180deg,
    rgb(31, 70, 138) 0%,
    #dde6fe 100%
  ); /* Adjusted angle and stops */

  @media (min-width: 780px) {
    /* padding-bottom: 200px; */
    font-size: 20px;
    font-weight: bold;
  }
`

const LayoutFrontPage = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />

        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default LayoutFrontPage
