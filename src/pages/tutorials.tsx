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
  const description = data.allContentfulCourse.edges[0].node.description

  const illustration =
    data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <AboutLayout>
        <Seo title="CORNFIELD" />

        <Wrapper>
          <HeroWrapper>
            <Title> Tutorials</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos
              <br></br>
              <br></br>
              Gamaiun
            </Text>
          </HeroWrapper>
          <Footer />
        </Wrapper>
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

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #6494e9 30.57%, #ffffff 90.38%);
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
  max-width: 600px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #011367;
  mix-blend-mode: normal;
  text-align: justify;
  @media (max-width: 780px) {
    max-width: 450px;
    font-size: 18px;
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
const AboutLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
