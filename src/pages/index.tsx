import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import LayoutFrontPage from "../components/layoutFrontPage"
import Seo from "../components/seo"
import ImageHero from "../images/waves/hero_image.png"

const IndexPage = ({ data }) => {
  const title = data.allContentfulCornfieldFront.edges[0].node.title
  const description = data.allContentfulCornfieldFront.edges[0].node.description
  const illustration = ImageHero

  const sections = data.allContentfulCornfieldFront.edges[0].node.section
  const points = sections.map(section => section.resultPoints)
  console.log(points)
  return (
    <LayoutFrontPage>
      <Seo title="Antonevicz" />
      <Wrapper>
        <HeroWrapper>
          <Illustration src={illustration} />
          <TextWrapper>
            <Title>A Whisper in the Rain</Title>
            {/* <Description>by Jonathan Reid</Description> */}
          </TextWrapper>
        </HeroWrapper>
      </Wrapper>
    </LayoutFrontPage>
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
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  padding-bottom: 50px;

  @media (min-width: 950px) {
    padding-bottom: 120px;
    font-size: 20px;
    font-weight: bold;
  }
`

const Title = styled.h4`
  max-width: 500px;
  max-height: 100px;
  /* font-style: normal; */
  font-weight: bold;
  font-size: 90px;
  text-align: end;
  color: #f5ecbb;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  @media (max-width: 950px) {
    max-width: 500px;
    font-size: 30px;
    font-weight: bold;
  }
`

const Description = styled.p`
  max-width: auto;
  font-weight: 700;
  font-style: bold;
  font-size: 30px;
  line-height: 0%;
  color: #1e2351;
  text-align: center;
  @media (max-width: 950px) {
    /* max-width: 500px; */
    font-size: 15px;
    font-weight: bold;
  }
`

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  gap: 35px;
  padding-top: 10px;

  @media (min-width: 950px) {
    width: 100%; /* Make sure it takes the full width of the second column */
    grid-column: 2 / 3; /* Occupy the second column */
  }
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 350px auto;
  gap: 50px;
  padding: 150px 30px 0px;
  justify-content: start;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    padding: 130px 30px 0px;
    padding-bottom: 50px;
    justify-items: center;
  }
`

const Illustration = styled.img`
  padding-top: 0px;
  width: 280px;
  margin: 0 auto;
  grid-template-columns: 350px auto;
  position: relative;
  display: grid;
  overflow: hidden;
  padding: 10px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 350px;
    padding: 0px;
  }
`
