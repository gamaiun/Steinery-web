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

  // const description = data.allContentfulCourse.edges[0].node.description

  // const illustration =
  //   data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  // const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <AboutLayout>
        <Seo title="100 Trades Challenge" />
        {/* <WaveBackground /> */}
        <Colorback>
          {/* <Wrapper> */}
          <HeroWrapper>
            <Text>
              <Title> 100 Trades Challenge </Title>
              <strong>Maximize 500$ investment in a 4 months period.</strong>
              <br></br>
              <h2>Trading Rules</h2>
              <ul>
                <li>One instrument only.</li>
                <li>Max risk 10%</li>
                <li>No external signals, indicators, "trading services".</li>
              </ul>
              <br></br>
              <br></br>
              <strong>Definition of "trade":</strong> Traditionally, a trade is
              viewed as a singular event, characterized by a single entry and
              exit point. However, I believe it's more insightful to consider a
              trade as a session encompassing multiple transactions. For
              instance, let's take 'Trade 7'. In my challenge, 'Trade 7' is not
              just one transaction but a series of them, identified as 7.1, 7.2,
              7.3, and so on. This approach allows us to view trading as a
              continuous process rather than a series of isolated events,
              offering a more holistic understanding of trading patterns.
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
              limiting myself to just one instrument. DAX40 index.
              <br></br>
              <br></br>
              Additionally, I adhere to the 5M timeframe candles, aligning with
              my trading philosophy for this challenge.
              <br></br>
              <br></br>
              <strong>Start Time:</strong> 01.01.2024
              <br></br>
              <strong>End Time:</strong> 01.04.2024
              <br></br>
              <strong>Starting capital: </strong>500$
              <br></br>
              <strong>Goal: </strong>1500$
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
  font-size: 30px;
  text-transform: uppercase;
  line-height: 62px;
  color: #e9e99f;
  mix-blend-mode: normal;
  @media (max-width: 780px) {
    max-width: 500px;
    font-size: 20px;
    font-weight: bold;
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
