import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SectionRow from "../rows/SectionRow"

function GridSection(props) {
  const { sections } = props
  return (
    <Wrapper>
      <Title> </Title>
      <Description></Description>
      <Grid>
        {sections.map((section, index) => (
          <Link to={`/${section.slug}`} key={index}>
            <SectionRow
              index={index + 1}
              title={section.title}
              description={section.description}
              timestamp="" //{section.duration}
            />
          </Link>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default GridSection

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 1234px;
  margin: 0 auto;
  text-align: center;
  gap: 12px;
  padding: 0 20px;
  padding-bottom: 0px;
`

const Title = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: #351e00;
`

const Description = styled.p`
  max-width: 460px;
  font-size: 13px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
  width: 100%;
  padding: 20px;
  background: linear-gradient(200.44deg, #daccfa 20.57%, #b2c5fe 66.38%);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 50px 100px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 20px;
`

// import React, { useState, useEffect } from "react"
// import styled from "styled-components"
// import Circles from "../animations/circles"

// function CourseCard(props) {
//   const { illustrations } = props
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex =>
//         prevIndex === illustrations.length - 1 ? 0 : prevIndex + 1
//       )
//     }, 3000) // Change image every 5 seconds

//     return () => clearInterval(interval)
//   }, [illustrations])

//   return (
//     <Wrapper className="courseCard">
//       {/* <AnimationWrapper>
//         <Circles />
//       </AnimationWrapper> */}
//       {illustrations.map((illustration, index) => (
//         <Illustration
//           key={index}
//           src={illustration}
//           alt={`illustration-${index}`}
//           style={{
//             opacity: index === currentIndex ? 1 : 0,
//             transition: "opacity 1s ease-in-out",
//           }}
//         />
//       ))}
//     </Wrapper>
//   )
// }

// export default CourseCard

// const Wrapper = styled.div`
//   position: relative;
//   display: grid;
//   overflow: hidden;
//   max-width: 320px;
//   width: 100%;
//   height: 480px;
//   background: linear-gradient(200.42deg, #ff6969 50.57%, #f7ff14 98.35%);
//   border-radius: 20px;
//   box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
//     inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
//   justify-content: center;
//   align-content: center;
// `

// const Illustration = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   position: absolute;
// `
