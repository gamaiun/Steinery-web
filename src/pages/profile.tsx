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
        {/* <WaveBackground /> */}
        <Colorback>
          {/* <Wrapper> */}
          <HeroWrapper>
            <Title> 100 Trades Challenge </Title>
            <Text>
              <h2>
                My goal is to turn my modest 2K$ account into 10K$ within a
                period of 4 months, starting 20/11/2023.
              </h2>
              <br></br>
              <h2>Trading Rules</h2>
              <ul>
                <li>One instrument only: SPY500.</li>
                <li>No hedging. I should either Short or Long.</li>
                <li>No external indicators (RSI, SMA, ect.)</li>
                <li>
                  No external signals, subscriptions, "trading services" of any
                  kind. I should rely only on my understanding of the market and
                  price action.
                </li>
                <li>
                  {" "}
                  Definition of "trade": Trade is not necessarily a single entry
                  and exit. I can enter and exit multiple times, so "Trade 7",
                  for example, is actualy - trading session number 7 with trades
                  7.1, 7.2, 7.3...
                </li>
              </ul>
              <br></br>
              <br></br>
              <h2>My Indicators</h2>I rely on my custom made indicators,
              constructed using a mesh of deltas of volumes, moving averages and
              weights. Not all of them will trigger a trade entry, and most of
              them won't be of any value - but any journey needs a starting
              point and I start with these tools.
              <br></br>
              <br></br>
              <h2>Instrument</h2>I adopt Tom Hougaard (TraderTom) approach,
              limiting myself to just one instrument. The SP500 under the US500
              ticker. This restriction prohibits hedging positions or
              diversifying the portfolio across multiple instruments.
              <br></br>
              <br></br>
              Additionally, I adhere to the H1 timeframe candles, aligning with
              my trading philosophy for this challenge.
              <br></br>
              <br></br>
              <strong>Start Time:</strong> 20.11.2023
              <br></br>
              <strong>End Time:</strong> 20.03.2024
              <br></br>
              <strong>Starting capital: </strong>2048$
              <br></br>
              <strong>Goal: </strong>10000$
              <br></br>
              <br></br>
              <br></br>
              <br></br> <br></br>
            </Text>
          </HeroWrapper>
          {/* </Wrapper> */}

          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Colorback>
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
const Colorback = styled.div`
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
