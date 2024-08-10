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
      {/* <AboutLayout> */}
      <Seo title="תקציר אילוף האור" />

      <Wrapper>
        <HeroWrapper>
          <Text>
            <Title>Jonathan Reid</Title>
            Born in 1974 in the bustling city of Chicago, has always been a
            storyteller at heart. From a young age, he was captivated by the
            world of literature, often found lost in books that transported him
            to different realms. His passion for writing emerged early, inspired
            by his love for the works of authors like Gabriel García Márquez and
            Haruki Murakami.. <br></br>
            <br></br>
            After earning a degree in English Literature from the University of
            Michigan, Jonathan spent several years traveling across Europe and
            Asia, where he absorbed diverse cultures and experiences that would
            later influence his writing. His debut novel, Whispers in the Wind,
            was a breakout success, lauded for its intricate plot and vivid
            character development. The book, a blend of magical realism and
            psychological thriller, quickly earned him a dedicated following.
            <br></br>
            <br></br>
            When he's not writing, Jonathan enjoys hiking in the Pacific
            Northwest, where he now resides, and exploring the culinary arts. He
            is known for his modest lifestyle, often retreating to a secluded
            cabin to focus on his writing. His latest work, Echoes of the Lost,
            continues to push the boundaries of genre fiction, solidifying his
            place as one of the most innovative writers of his generation.
            <br></br>
            <br></br>
            <LinkContainer>
              <a href="https://t.me/lazyfarmerchallenge">Facebook</a>
              <a href="https://t.me/lazyfarmerchallenge">YouTube</a>
              <a href="https://t.me/lazyfarmerchallenge">Email</a>
            </LinkContainer>{" "}
          </Text>
        </HeroWrapper>
      </Wrapper>
    </Layout>
  )
}
export default Calendar

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

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; /* Adjust width as needed */
  margin: 0 auto;
  gap: 10px;
  max-width: 100%;
  padding: 10px;
  background-blend-mode: overlay;

  a {
    font-size: 15px;
    color: #537597;
    padding: 5px 15px 5px 15px;

    &,
    * {
      transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    :hover {
      border-radius: 10px;
      background: rgba(68, 66, 178, 0.1);
      box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
    }
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
