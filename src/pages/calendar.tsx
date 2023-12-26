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
import EconomicCalendar from "../components/EconomicCalendar"
import PositionSizeCalculator from "../components/PositionSizeCalculator"
const Calendar = ({ data }) => {
  return (
    <Layout>
      <Seo title="100 Trades Challenge" />

      <Wrapper>
        <HeroWrapper>
          <Title>Economic Calendar</Title>
          <EconomicCalendar />
          <PositionSizeCalculator />
        </HeroWrapper>
        <Footer />
      </Wrapper>
      {/* </AboutLayout> */}
    </Layout>
  )
}
export default Calendar

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #6494e9 30.57%, #ffffff 90.38%);
`

const Title = styled.h1`
  text-align: center; // Centers the text inside the Title component
  width: 100%; // Ensures Title takes up the full width of its container
  margin: 0 auto; // Removes default margin and centers the Title component
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  color: #e9e99f;
  mix-blend-mode: normal;

  @media (max-width: 780px) {
    font-size: 20px; // Adjusts font size for smaller screens
  }
`

const Text = styled.h5`
  max-width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #011367;
  mix-blend-mode: normal;
  text-align: justify;
  @media (max-width: 780px) {
    max-width: 300px;
    font-size: 15px;
  }
`

const Signature = styled(Link)`
  img {
    height: 70px;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  /* max-width: 1234px; */
  /* grid-template-columns: 360px 1; */
  gap: 60px;
  padding: 135px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  /* .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  } */
`
