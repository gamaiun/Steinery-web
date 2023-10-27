import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import GridSection from "../components/sections/GridSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"

const IndexPage = ({ data }) => {
  const title = data.allContentfulCourse.edges[0].node.title

  const description = data.allContentfulCourse.edges[0].node.description

  const illustration =
    data.allContentfulCourse.nodes[0]?.illustration?.file?.url

  const sections = data.allContentfulCourse.edges[0].node.sections

  return (
    <Layout>
      <Seo title="STEINERY" />
      <WaveBackground />
      <Wrapper>
        <HeroWrapper>
          <CourseCard illustration={illustration} />
          <TextWrapper>
            <Logo src="/images/logos/react-logo.svg" alt="icon" />
            <Title>{title}</Title>
            <Caption>20sections 3 hours</Caption>
            <Description>{description}</Description>
            <AuthorWrapper>
              <AvatarImage src="/images/avatars/Meng.png" alt="avatar" />
              <Caption>Taught by Meng To</Caption>
            </AuthorWrapper>
            <PurchaseButton />
            <SmallText>
              Purchase includes access to 30 courses. Over 80 hours of content,
              including 12 hours for SwiftUI, for iOS 13 and iOS 14.
            </SmallText>
          </TextWrapper>
        </HeroWrapper>

        <Divider />
        <GridSection sections={sections} />
      </Wrapper>
    </Layout>
  )
}
export default IndexPage

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
  /* background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%); */
`
const Logo = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;

  // Text Wrapper
  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
`

const SmallText = styled.p`
  max-width: 280px;
  font-style: normal;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`
const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 39px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 32px;
`
