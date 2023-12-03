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
const Aboutpage = ({ data }) => {
  // const description = data.allContentfulCourse.edges[0].node.description

  // const illustration =
  //   data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  // const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <AboutLayout>
        <Seo title="CORNFIELD" />

        <Wrapper>
          <HeroWrapper>
            <Text>
              <Title>Timestamp</Title>I use{" "}
              <a href="https://t.me/lazyfarmerchallenge">
                this Telegram channel
              </a>{" "}
              as "proof of trade" timestamp. Unlike this website, where dates
              can be manipulated, Telegram features are inaccessible to me.
              Therefore, this is a simple and effective way to validate the date
              of the trade. Each post will contain the following information:
              <br></br>
              <br></br>
              <ul>
                <li>Trade number (1-100)</li>
                <li>Position size</li>
                <li>
                  Either word "Start", "End", "Adding" (to position), "Folding"{" "}
                </li>
              </ul>
              <br></br>
              <br></br>
              <Signature>
                <img src="/images/icons/lazyFarmer.png" alt="LazyFarmer" />
              </Signature>
            </Text>
          </HeroWrapper>
          <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br>
          <Footer />
        </Wrapper>
      </AboutLayout>
    </Layout>
  )
}
export default Aboutpage

// export const query = graphql`
//   query MyQuery {
//     allContentfulCourse {
//       edges {
//         node {
//           title
//           description
//           sections {
//             duration
//             description
//             title
//             slug
//             illustration {
//               file {
//                 url
//               }
//             }
//           }
//         }
//       }
//       nodes {
//         illustration {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// `

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #6494e9 30.57%, #ffffff 90.38%);
`
const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 62px;
  color: #e9e99f;
  mix-blend-mode: normal;
  /* text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); */
`

// const Title = styled.h1`
//   max-width: 500px;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 50px;
//   line-height: 62px;
//   color: #fffbf6;
//   mix-blend-mode: normal;
//   /* text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); */
// `
const Signature = styled(Link)`
  img {
    height: 70px;
  }
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
const AboutLayout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
