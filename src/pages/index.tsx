import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import GridSection from "../components/sections/GridSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
import Footer from "../components/footer"
import { Link } from "gatsby"
import App from "../components/App"
import ChartDrawdown from "../components/ChartDrawdown"
import ChartLoad from "../components/ChartLoad"
import ChartSharp from "../components/ChartSharp"
import ChartProfitFactor from "../components/ChartProfitFactor"

const IndexPage = ({ data }) => {
  const title = data.allContentfulCornfieldFront.edges[0].node.title

  const description = data.allContentfulCornfieldFront.edges[0].node.description

  const illustration =
    data.allContentfulCornfieldFront.edges[0].node?.illustrationMain.url

  const sections = data.allContentfulCornfieldFront.edges[0].node.section
  const trades = sections.map(section => section.tradeNumber)
  const points = sections.map(section => section.resultPoints)
  const maxDrawdown = sections.map(section => section.maxDrawdown)
  const maxDepositLoad = sections.map(section => section.maxDepositLoad)
  const sharpRatio = sections.map(section => section.sharpRatio)
  const profitFactor = sections.map(section => section.profitFactor)
  console.log(points)
  return (
    <Layout>
      <Seo title="CORNFIELD" />
      {/* <WaveBackground /> */}
      <Wrapper>
        <HeroWrapper>
          <Illustration src={illustration} />
          <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>

            <Signature>
              <img src="/images/icons/lazyFarmer.png" alt="LazyFarmer" />
            </Signature>
          </TextWrapper>
        </HeroWrapper>
        <App points={points} trades={trades} />
        <ChartsContainer>
          <ChartDrawdown maxDrawdown={maxDrawdown} trades={trades} />
          <ChartLoad maxDepositLoad={maxDepositLoad} trades={trades} />
          <ChartSharp sharpRatio={sharpRatio} trades={trades} />
          <ChartProfitFactor profitFactor={profitFactor} trades={trades} />
        </ChartsContainer>
        <GridSection sections={sections} />

        <ButtonWrapper>
          <PurchaseButton />
        </ButtonWrapper>
        <Footer />
      </Wrapper>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulCornfieldFront {
      edges {
        node {
          title
          description
          illustrationMain {
            url
          }
          section {
            slug
            title
            description
            resultPoints
            tradeNumber
            maxDepositLoad
            maxDrawdown
            sharpRatio
            profitFactor
            averageHoldTime
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  background: linear-gradient(140.44deg, #457ddd 20.57%, #f8e0ff 60.38%);
`
// const Logo = styled.img`
//   width: 60px;
//   height: 60px;
// `
const Title = styled.h4`
  max-width: 500px;
  max-height: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  /* line-height: 72px; */
  color: #f5ecbb;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  @media (max-width: 780px) {
    max-width: 500px;
    font-size: 30px;
    font-weight: bold;
  }
`

const Description = styled.p`
  max-width: auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  /* padding-top: 10px; */
  /* padding-bottom: 20px; */
  color: #3c437e;
  text-align: justify;
  text-align: start;
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  grid-template-rows: auto auto; /* Two rows: one for title, one for description */
  padding-top: 40px;

  // Align grid items to start (top) of each row
  align-content: start;

  // Text Wrapper
  @media (max-width: 780px) {
    padding-top: 0px;
    gap: 35px;
    /* justify-items: center; */
    /* text-align: center; */
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  display: grid;
  padding-top: 50px;
  gap: 0px;
  justify-items: center;
  text-align: center;

  // Text Wrapper
  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 350px auto;
  gap: 70px;
  padding: 150px 30px 0px;
  justify-content: start;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 990px) {
    gap: 30px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    padding: 130px 30px 0px;
    justify-items: center;
  }
`

const Illustration = styled.img`
  padding-top: 0px;
  /* max-width: 100%; */
  width: 350px;
  height: 350px;
  margin: 0 auto;
  grid-template-columns: 350px auto;
  position: relative;
  display: grid;
  overflow: hidden;
  padding: 10px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 250px;
    height: 250px;
    /* max-width: 50%; /* Set maximum width to 80% when the screen width is 780px or less */
    padding: 0px;
  }
`

const MyLink = styled(Link)`
  img {
    height: 44px;
    width: 44px;
  }
`
const Signature = styled(Link)`
  img {
    height: 70px;
  }
`
const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns
  gap: 20px; // Space between charts
  max-width: 1234px; // Aligning with the max-width of HeroWrapper
  margin: 0 auto; // Centering the container
  padding: 20px; // Optional padding for better spacing

  @media (max-width: 900px) {
    grid-template-columns: 1fr; // One column on small screens
  }
  width: 90%;
  // Ensure it takes the full width of the container
`
