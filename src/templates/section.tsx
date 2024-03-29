import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionContent from "../components/sections/SectionContent"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
function Section(props) {
  const { data } = props
  const sectionData = data.contentfulSection
  const markdown = sectionData.content.childMarkdownRemark
  // console.log(markdown)
  return (
    <Layout>
      <Seo title={sectionData.title} description={sectionData.description} />
      <WaveBackground />
      <Wrapper>
        <HeroWrapper>
          <Illustration
            src={sectionData.illustration.file.url}
            alt="illustration"
          />
          <Title>{sectionData.title}</Title>
          <Description>{sectionData.description}</Description>
        </HeroWrapper>
      </Wrapper>
      <SectionContent {...markdown} />
    </Layout>
  )
}

export default Section

export const sectionQuery = graphql`
  query SectionQuery($slug: String!) {
    contentfulSection(slug: { eq: $slug }) {
      title
      description
      duration
      slug
      illustration {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
  justify-content: center;
  text-align: center;
`

const HeroWrapper = styled.div`
  display: grid;
  gap: 20px;
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
`

const Illustration = styled.img`
  padding-top: 140px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`

const Title = styled.h1`
  max-width: 500px;
  margin: 0 auto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
`

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
  mix-blend-mode: normal;
`
