// import React from "react"
// import styled from "styled-components"
// import GridSection from "./sections/GridSection"
// import PurchaseButton from "./buttons/PurchaseButton"
// import { graphql } from "gatsby"

// const Footer = ({ data }) => {
//   const sections = data.allContentfulCornfieldFront.edges[0].node.section

//   return (
//     <>
//       <GridSection sections={sections} />

//       <ButtonWrapper>
//         <PurchaseButton />
//       </ButtonWrapper>
//       <Wrapper
//         style={{
//           marginTop: `var(--space-5)`,
//           fontSize: `var(--font-sm)`,
//         }}
//       >
//         {/* <Text>© {new Date().getFullYear()} &middot; Built by Gamaiun</Text> */}
//         <AuthorWrapper>
//           <AvatarImage
//             src="/images/logos/createdByGamaiun.png"
//             alt="CreatedByGamaiun"
//           />
//           {/* <Caption>Created by Gamaiun</Caption> */}
//         </AuthorWrapper>
//         <Wave src="/images/waves/footer-wave3.svg" alt="footer" />
//       </Wrapper>
//     </>
//   )
// }

// export default Footer

// const Wrapper = styled.div`
//   position: relative;
//   padding-top: 0px;
//   /* bottom: 0; */
// `
// const Text = styled.div`
//   position: absolute;
//   width: 100%;
//   text-align: center; // To center the text horizontally
//   bottom: 20px; // Adjust this value to position the text vertically
//   z-index: 2; // To ensure the text stays on top
//   color: aliceblue;
// `

// const ButtonWrapper = styled.div`
//   position: relative;
//   display: grid;
//   padding-top: 50px;
//   gap: 0px;
//   justify-items: center;
//   text-align: center;

//   // Text Wrapper
//   @media (max-width: 780px) {
//     justify-items: center;
//     text-align: center;
//   }
// `

// const Wave = styled.img`
//   position: relative;
//   width: 100%;
//   /* max-height: 250px; */
//   height: 250px;

//   z-index: 1;
//   /* mix-blend-mode: multiply; */
// `
// const Caption = styled.p`
//   font-style: normal;
//   font-size: 15px;
//   line-height: 130%;
//   text-transform: uppercase;
//   color: rgba(27, 0, 0, 0.7);
// `

// const AuthorWrapper = styled.div`
//   /* display: flex;
//   align-items: center;
//   gap: 16px; */
//   align-items: center;
//   position: absolute;
//   width: 100%;
//   text-align: center; // To center the text horizontally
//   padding-left: 20px;
//   bottom: 20px; // Adjust this value to position the text vertically
//   z-index: 2;
// `

// const AvatarImage = styled.img`
//   width: 150px;
//   height: 32px;
// `

// export const query = graphql`
//   query MyQuery {
//     allContentfulCornfieldFront {
//       edges {
//         node {
//           title
//           description
//           illustrationMain {
//             url
//           }
//           section {
//             slug
//             title
//             description
//             resultPoints
//             tradeNumber
//             maxDepositLoad
//             maxDrawdown
//             sharpRatio
//             profitFactor
//             averageHoldTime
//           }
//         }
//       }
//     }
//   }
// `
import React from "react"
import styled from "styled-components"
import GridSection from "./sections/GridSection"
import PurchaseButton from "./buttons/PurchaseButton"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
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
              tradeNumber
            }
          }
        }
      }
    }
  `)

  const sections = data.allContentfulCornfieldFront.edges[0].node.section

  return (
    <>
      <GridSection sections={sections} />

      <ButtonWrapper>
        <PurchaseButton />
      </ButtonWrapper>
      <Wrapper
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        {/* <Text>© {new Date().getFullYear()} &middot; Built by Gamaiun</Text> */}
        <AuthorWrapper>
          <AvatarImage
            src="/images/logos/createdByGamaiun.png"
            alt="CreatedByGamaiun"
          />
          {/* <Caption>Created by Gamaiun</Caption> */}
        </AuthorWrapper>
        <Wave src="/images/waves/footer-wave3.svg" alt="footer" />
      </Wrapper>
    </>
  )
}

export default Footer

const Wrapper = styled.div`
  position: relative;
  padding-top: 0px;
  /* bottom: 0; */
`
const Text = styled.div`
  position: absolute;
  width: 100%;
  text-align: center; // To center the text horizontally
  bottom: 20px; // Adjust this value to position the text vertically
  z-index: 2; // To ensure the text stays on top
  color: aliceblue;
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

const Wave = styled.img`
  position: relative;
  width: 100%;
  /* max-height: 250px; */
  height: 250px;

  z-index: 1;
  /* mix-blend-mode: multiply; */
`
const Caption = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(27, 0, 0, 0.7);
`

const AuthorWrapper = styled.div`
  /* display: flex;
  align-items: center;
  gap: 16px; */
  align-items: center;
  position: absolute;
  width: 100%;
  text-align: center; // To center the text horizontally
  padding-left: 20px;
  bottom: 20px; // Adjust this value to position the text vertically
  z-index: 2;
`

const AvatarImage = styled.img`
  width: 150px;
  height: 32px;
`
