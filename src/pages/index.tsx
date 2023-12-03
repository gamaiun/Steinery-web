import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import GridSection from "../components/sections/GridSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WaveBackground from "../components/backgrounds/WaveBackground"
import Footer from "../components/footer"
import { Link } from "gatsby"
import App from "../components/App"

const IndexPage = ({ data }) => {
  const title = data.allContentfulCornfieldFront.edges[0].node.title

  const description = data.allContentfulCornfieldFront.edges[0].node.description

  const illustration =
    data.allContentfulCornfieldFront.edges[0].node?.illustrationMain.url

  const sections = data.allContentfulCornfieldFront.edges[0].node.section
  const trades = sections.map(section => section.tradeNumber)
  const points = sections.map(section => section.resultPoints)

  // const GridSection = ({ sections }) => {
  //   const logs = sections.map((section, index) => {
  //     const trades = section.tradeNumber
  //     const points = section.resultPoints

  //     return `Section ${index + 1}: Trades - ${trades}, Points - ${points}`
  //   })
  //   console.log(logs)
  //   return null
  // }
  console.log(points)
  return (
    <Layout>
      <Seo title="CORNFIELD" />
      <WaveBackground />
      <Wrapper>
        <HeroWrapper>
          <Illustration src={illustration} />
          {/* <CourseCard illustration={illustration} /> */}
          <TextWrapper>
            <Title>{title}</Title>
            {/* <Caption>20sections 3 hours</Caption> */}
            <Description>{description}</Description>
            {/* <img src={localImagePath} alt="local image" /> */}
            {/* <MyLink to="/">
              <img src="/images/logos/cornfield_logo.webp" alt="Logo" />
            </MyLink> */}
            <Signature>
              <img src="/images/icons/lazyFarmer.png" alt="LazyFarmer" />
            </Signature>

            {/* 
            <PurchaseButton /> */}
            {/* <SmallText>
              Purchase includes access to 30 courses. Over 80 hours of content,
              including 12 hours for SwiftUI, for iOS 13 and iOS 14.
            </SmallText> */}
          </TextWrapper>
        </HeroWrapper>
        <App points={points} trades={trades} />

        {/* <Divider /> */}
        <GridSection sections={sections} />

        <ButtonWrapper>
          {/* <AuthorWrapper>
            <AvatarImage src="/images/avatars/Meng.png" alt="avatar" />
            <Caption>Created by Gamaiun</Caption>
          </AuthorWrapper>{" "} */}

          <PurchaseButton />
        </ButtonWrapper>
        <Footer />
      </Wrapper>
    </Layout>
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
            description
            resultPoints
            tradeNumber
          }
        }
      }
    }
  }
`

// const AppContainer = styled.div`
//   width: 100%; /* Take the full width of the container */
//   max-width: 1200px; /* Set a maximum width */
//   height: 400px; /* Set an initial height */
//   margin-bottom: 20px; /* Adjust margin as needed */

//   @media (max-width: 768px) {
//     /* Adjust styles for screens with a width of 768px or less */
//     height: 100px;
//   }
// `

const Wrapper = styled.div`
  background: linear-gradient(180.44deg, #6494e9 20.57%, #e6e2f2 50.38%);
`
// const Logo = styled.img`
//   width: 60px;
//   height: 60px;
// `
const Title = styled.h4`
  max-width: 500px;
  max-height: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  /* line-height: 72px; */
  color: #f5ecbb;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
  @media (max-width: 780px) {
    max-width: 500px;
    font-size: 30px;
    font-weight: bold;
  }
`

// const Caption = styled.p`
//   font-style: normal;
//   font-size: 15px;
//   line-height: 130%;
//   text-transform: uppercase;
//   color: rgba(27, 0, 0, 0.7);
// `

const Description = styled.p`
  max-width: auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  /* padding-top: 10px; */
  /* padding-bottom: 20px; */
  color: #3c437e;
  text-align: justify;
  text-align: start;
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  grid-template-rows: auto auto; /* Two rows: one for title, one for description */
  padding-top: 40px;

  // Align grid items to start (top) of each row
  align-content: start;

  // Text Wrapper
  @media (max-width: 780px) {
    padding-top: 0px;
    gap: 35px;
    /* justify-items: center; */
    /* text-align: center; */
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  display: grid;
  padding-top: 50px;
  gap: 0px;
  justify-items: center;
  text-align: center;

  // Text Wrapper
  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

// const AuthorWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;
// `

// const AvatarImage = styled.img`
//   width: 32px;
//   height: 32px;
// `

// const SmallText = styled.p`
//   max-width: 280px;
//   font-style: normal;
//   font-size: 13px;
//   line-height: 130%;
//   color: rgba(5, 3, 0, 0.9);
// `
const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 350px auto;
  gap: 70px;
  padding: 150px 30px 0px;
  justify-content: start;
  margin: 0 auto;

  .courseCard {
    margin-top: 0px;
  }

  @media (max-width: 990px) {
    gap: 30px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    padding: 130px 30px 0px;
    justify-items: center;
  }
`

// const Divider = styled.div`
//   width: 300px;
//   height: 0.5px;
//   background: rgba(0, 0, 0, 0.3);
//   margin: 20px auto 0px;
// `

const Illustration = styled.img`
  padding-top: 0px;
  /* max-width: 100%; */
  width: 350px;
  height: 350px;
  margin: 0 auto;
  grid-template-columns: 350px auto;
  position: relative;
  display: grid;
  overflow: hidden;
  padding: 10px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 250px;
    height: 250px;
    /* max-width: 50%; /* Set maximum width to 80% when the screen width is 780px or less */
    padding: 0px;
  }
`

const MyLink = styled(Link)`
  img {
    height: 44px;
    width: 44px;
  }
`
const Signature = styled(Link)`
  img {
    height: 70px;
  }
`
