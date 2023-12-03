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
import { Link } from "gatsby"

const Weekly = ({ data }) => {
  const description = data.allContentfulCourse.edges[0].node.description

  const illustration =
    data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <AboutLayout>
        <Seo title="100 Trades Challenge" />

        <Wrapper>
          <HeroWrapper>
            <br></br>
            <br></br>
            <Text>
              <h2>Why I write this blog?</h2>
              Following seasoned traders, I've observed that accountability,
              often as straightforward as a systematic public display of trading
              results, prompts better decision-making and trade justifications.
              Impulses struggle to justify themselves on paper (or a blog), let
              alone on a trading account balance. This trading journal is a
              transparent showcase of my actions, smart and (mostly) stupid as I
              take the 100 trades challenge. While I don't unveil specific
              indicators nor their construction (mostly for your own financial
              safety, as most of them won't work and none of them will work all
              the time), you can easily reverse engineer my approach (if you
              wish to do so) and test it on a demo. Most importantly - learn
              from my mistakes. I urge you to research, experiment, and embrace
              accountability in your trading odyssey (and life).
              <br></br>
              Learn to swim, then to surf. Otherwise, stay on the shore. Any
              romantic notion of easy money will lead you into the abyss of
              financial disaster.
              <br></br>
              <br></br>
              <h2>My Trading Philosophy</h2>
              My initial trading philosophy (hypothesis?) can be summed up in a
              single sentence. Beyond that, everything is my persistent (but
              mostly futile) effort to validate it. I know it, I feel it, it
              makes sense to me. And if that assurance isn't enough, Jim Simons,
              the Godfather of algorithmic trading, swears by this axiom.
              <br></br>
              <br></br>
              Here it is: <strong>The markets are not perfect.</strong> Period.
              <br></br>
              <br></br>
              My sole responsibility is to identify and exploit these
              imperfections. <br></br>
              <br></br>
              <br></br>
              <h2>100 Trades Challenge</h2>
              My goal in this challenge is to turn my 2K$ account into 10K$
              within a period of 4 months. 38% a month. Is it possible? I don't
              know. Let's try )))
              <br></br>
              <br></br>
              <br></br>
              <Signature>
                <img src="/images/icons/lazyFarmer.png" alt="LazyFarmer" />
              </Signature>
            </Text>
          </HeroWrapper>
          <Footer />
        </Wrapper>
      </AboutLayout>
    </Layout>
  )
}
export default Weekly

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
  font-size: 50px;
  line-height: 62px;
  color: #fffbf6;
  mix-blend-mode: normal;
  /* text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3); */
`
const Signature = styled(Link)`
  img {
    height: 70px;
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
