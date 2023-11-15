import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionContent from "../components/sections/SectionContent"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
import GridSection from "../components/sections/GridSection"
import Footer from "../components/footer"

function Section(props) {
  const { data } = props
  const sectionData = data.contentfulCornfieldPages
  const markdown = sectionData.content.childMarkdownRemark
  const sections = data.allContentfulCornfieldFront.edges[0].node.section

  console.log(data)
  return (
    <Layout>
      <Seo title="CORNFIELD" />
      <WaveBackground />
      <Wrapper>
        <HeroWrapper>
          <Illustration
            src={sectionData.pageIllustration.url}
            alt="illustration"
          />
          <TextWrapper>
            <Title>{sectionData.title}</Title>
            <Description>{sectionData.description}</Description>
          </TextWrapper>
        </HeroWrapper>
        <SectionContent {...markdown} />
        <GridSection sections={sections} />
        <Footer />
      </Wrapper>
    </Layout>
  )
}

export default Section

export const sectionQuery = graphql`
  #

  query allContentfulCornfieldFrontAndSectionQuery($slug: String!) {
    allContentfulCornfieldFront {
      edges {
        node {
          title
          description

          section {
            slug
            title
          }
        }
      }
    }

    contentfulCornfieldPages(slug: { eq: $slug }) {
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
      title
      pageIllustration {
        url
      }
      description
      slug
    }
  }
`

const Wrapper = styled.div`
  background: linear-gradient(220.44deg, #6494e9 3.57%, #ffffff 98.38%);
`

const Title = styled.h1`
  max-width: 500px;
  padding-top: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 52px;
  color: #e8d9ff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`
const Illustration = styled.img`
  padding-top: 0px;
  max-width: 120%;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 380px auto;
  position: relative;
  display: grid;
  width: 350px;
  overflow: hidden;
`

const Description = styled.p`
  max-width: 400px;
  font-style: italic;
  font-size: 20px;
  line-height: 140%;
  color: #cad5fe;
  padding-top: 10%;
  text-align: justify;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    padding-left: 45px;
    padding-right: 45px;

    justify-items: center;
    padding-bottom: 10%;
  }
`

const TextWrapper = styled.div`
  position: relative;
  /* display: grid; */
  gap: 0px;

  // Text Wrapper
  @media (max-width: 800px) {
    justify-items: center;
    text-align: center;
  }
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 20px;
  padding: 160px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

// const IndexPage = ({ data }) => {
//   const title = data.allContentfulCornfieldFront.edges[0].node.title
//   const description = data.allContentfulCornfieldFront.edges[0].node.description
//   const sections = data.allContentfulCornfieldFront.edges[0].node.section
