import { useStaticQuery } from "gatsby"
import Header from "../components/header"
import "../components/layout.css"

import * as React from "react"
// import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
import Footer from "../components/footer"
import Layout from "../components/layout"
import { Link } from "gatsby"
// import withAuth from "../components/withAuth"

const Aboutpage = ({ data }) => {
  return (
    <Layout>
      {/* <AboutLayout> */}
      <Seo title="תקציר  " />

      <Wrapper>
        <HeroWrapper>
          <Text>
            <Title>A Whisper in the Rain</Title>
            In A Whisper in the Rain, two souls destined to meet find themselves
            in the quaint town of Everwood. When Emma, a quiet bookstore owner
            with a past she's trying to forget, meets Lucas, a mysterious artist
            with secrets of his own, sparks fly against the backdrop of a town
            known for its endless rain. As they navigate their growing feelings,
            they must confront the shadows of their pasts. Love, redemption, and
            the healing power of trust take center stage in this heartwarming
            romantic journey.
          </Text>
        </HeroWrapper>
      </Wrapper>
    </Layout>
  )
}
export default Aboutpage

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
    180deg,
    #6494e9 0%,
    #ffffff 100%
  ); /* Adjusted angle and stops */

  @media (min-width: 780px) {
    padding-bottom: 200px;
    font-size: 20px;
    font-weight: bold;
  }
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 62px;
  color: #1e3c6d;
  padding-bottom: 50px;

  text-align: center;

  mix-blend-mode: normal;
  @media (max-width: 780px) {
    max-width: 500px;
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`

const Text = styled.h5`
  max-width: 600px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #011367;
  mix-blend-mode: normal;
  color: #010953;
  text-align: justify;
  direction: rtl;
  @media (max-width: 780px) {
    max-width: 350px;
    font-size: 15px;
    font-size: 17px;
    line-height: 30px;
  }
`

const Signature = styled(Link)`
  img {
    height: 70px;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 500px;
  /* grid-template-columns: 360px 1; */
  /* gap: 60px; */
  padding: 135px 10px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-content: center;

    justify-items: center;
  }
`
// const AboutLayout = ({ children }) => {
//   return (
//     <>
//       <main>{children}</main>
//     </>
//   )
// }
