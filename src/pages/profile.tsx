import { useStaticQuery } from "gatsby"
import Header from "../components/header"
import "../components/layout.css"

import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
import Footer from "../components/footer"
import Layout from "../components/layout"

const Aboutpage = ({ data }) => {
  // const title = data.allContentfulCourse.edges[0].node.title

  const description = data.allContentfulCourse.edges[0].node.description

  const illustration =
    data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <AboutLayout>
        <Seo title="100 Trades Challenge" />
        <WaveBackground />
        <Wrapper>
          <HeroWrapper>
            <Title> Profile </Title>
            <Text>
              The profile registration option is currently unavailable as all
              the information on this website is offered free of charge at this
              stage.
              <br></br> <br></br>
            </Text>
          </HeroWrapper>
        </Wrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </AboutLayout>
    </Layout>
  )
}
export default Aboutpage

export const query = graphql`
  query MyQuery {
    allContentfulCourse {
      edges {
        node {
          title
          description
          sections {
            duration
            description
            title
            slug
            illustration {
              file {
                url
              }
            }
          }
        }
      }
      nodes {
        illustration {
          file {
            url
          }
        }
      }
    }
  }
`

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the layout takes at least the full height of the viewport */
  /* Replace these colors with your desired gradient */
`

const MainContent = styled.main`
  flex: 1; /* Allows the main content to take up remaining vertical space */
`

const FooterWrapper = styled.div`
  flex-shrink: 0; /* Prevents the footer from shrinking when content is too tall */
`

const Wrapper = styled.div`
  flex: 1; /* Allows Wrapper to take up remaining vertical space */
`

const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 62px;
  color: #fffbf6;
  mix-blend-mode: normal;
  /* text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); */
`

const Text = styled.h5`
  max-width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #011367;
  mix-blend-mode: normal;
  text-align: justify;
  @media (max-width: 780px) {
    max-width: 300px;
    font-size: 15px;
  }
`
const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px 1;
  gap: 60px;
  padding: 135px 20px 0px;
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
