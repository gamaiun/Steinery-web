// import { Link } from "gatsby"
// import React, { useEffect, useRef, useState } from "react"
// import styled from "styled-components"
// import { menuData } from "../data/menuData"
// import MenuButton from "./buttons/MenuButton"
// import MenuTooltip from "./tooltip/MenuTooltip"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const ref = useRef()
//   const tooltipRef = useRef()

//   function handleClick(event) {
//     setIsOpen(!isOpen)
//     event.preventDefault()
//     // console.log(event)
//   }

//   function handleClickOutside(event) {
//     if (
//       ref.current &&
//       !ref.current.contains(event.target) &&
//       !tooltipRef.current.contains(event.target)
//     ) {
//       console.log("Document is clicked")
//       setIsOpen(false)
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside)

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   return (
//     <Wrapper>
//       <MyLink to="/">
//         <img src="/images/logos/logo_w.png" alt="Logo" />
//         {/* <img src="/images/contentful/dog.png" alt="Logo" /> */}
//       </MyLink>
//       <MenuWrapper count={menuData.length} ref={ref}>
//         {menuData.map((item, index) =>
//           item.link === "/account" ? (
//             <MenuButton
//               item={item}
//               key={index}
//               onClick={event => handleClick(event)}
//             />
//           ) : (
//             <MenuButton item={item} key={index} />
//           )
//         )}
//         <HamburgerWrapper>
//           <MenuButton
//             item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
//             onClick={event => handleClick(event)}
//           />
//         </HamburgerWrapper>
//       </MenuWrapper>
//       <div ref={tooltipRef}>
//         <MenuTooltip isOpen={isOpen} />
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
//   position: absolute;
//   top: 30px;
//   display: grid;
//   grid-template-columns: 44px auto;
//   width: 100%;
//   justify-content: space-between;
//   padding: 0 30px;
//   align-items: center;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     top: 30px;
//   }
//   @media (max-width: 450px) {
//     top: 20px;
//     padding: 0 20px;
//   }
// `

// const MenuWrapper = styled.div`
//   display: grid;
//   gap: 30px;
//   grid-template-columns: repeat(${props => props.count}, auto);
//   z-index: 1000;

//   @media (max-width: 768px) {
//     > a {
//       display: none;
//     }
//     grid-template-columns: auto;
//   }
// `

// const HamburgerWrapper = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `

// const MyLink = styled(Link)`
//   img {
//     height: 44px;
//     width: 44px;
//   }
// `

// const Description = styled.p`
//   max-width: auto;
//   font-weight: 700;
//   font-style: bold;
//   font-size: 30px;
//   line-height: 0%;
//   color: #1e2351;
//   text-align: center;
//   @media (max-width: 950px) {
//     /* max-width: 500px; */
//     font-size: 15px;
//     font-weight: bold;
//   }
// `

////////// HEADER WITTH DISCRIPRION ONLY

// import React, { useEffect, useRef, useState } from "react"
// import styled from "styled-components"
// import { Link, graphql, useStaticQuery } from "gatsby"
// import { menuData } from "../data/menuData"
// import MenuButton from "./buttons/MenuButton"
// import MenuTooltip from "./tooltip/MenuTooltip"

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const ref = useRef()
//   const tooltipRef = useRef()

//   // GraphQL query to fetch the description
//   const data = useStaticQuery(graphql`
//     query {
//       allContentfulCornfieldFront {
//         edges {
//           node {
//             description
//           }
//         }
//       }
//     }
//   `)

//   const description = data.allContentfulCornfieldFront.edges[0].node.description

//   function handleClick(event) {
//     setIsOpen(!isOpen)
//     event.preventDefault()
//   }

//   function handleClickOutside(event) {
//     if (
//       ref.current &&
//       !ref.current.contains(event.target) &&
//       !tooltipRef.current.contains(event.target)
//     ) {
//       setIsOpen(false)
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   return (
//     <Wrapper>
//       <MyLink to="/">
//         {/* Use the description instead of the logo image */}
//         <DescriptionText>Jonathan Reid</DescriptionText>
//       </MyLink>
//       <MenuWrapper count={menuData.length} ref={ref}>
//         {menuData.map((item, index) =>
//           item.link === "/account" ? (
//             <MenuButton
//               item={item}
//               key={index}
//               onClick={event => handleClick(event)}
//             />
//           ) : (
//             <MenuButton item={item} key={index} />
//           )
//         )}
//         <HamburgerWrapper>
//           <MenuButton
//             item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
//             onClick={event => handleClick(event)}
//           />
//         </HamburgerWrapper>
//       </MenuWrapper>
//       <div ref={tooltipRef}>
//         <MenuTooltip isOpen={isOpen} />
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
//   position: absolute;
//   top: 30px;
//   display: grid;
//   grid-template-columns: auto auto;
//   width: 100%;
//   justify-content: space-between;
//   padding: 0 30px;
//   align-items: center;
//   z-index: 1000;

//   @media (max-width: 768px) {
//     top: 30px;
//   }
//   @media (max-width: 450px) {
//     top: 20px;
//     padding: 0 20px;
//   }
// `

// const MenuWrapper = styled.div`
//   display: grid;
//   gap: 30px;
//   grid-template-columns: repeat(${props => props.count}, auto);
//   z-index: 1000;

//   @media (max-width: 768px) {
//     > a {
//       display: none;
//     }
//     grid-template-columns: auto;
//   }
// `

// const HamburgerWrapper = styled.div`
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `

// const MyLink = styled(Link)`
//   display: flex;
//   align-items: center;
// `

// const DescriptionText = styled.div`
//   font-size: 22px;
//   color: rgb(118, 156, 218);
//   font-weight: 800;
//   text-align: center;
// `

import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import { menuData } from "../data/menuData"
import MenuButton from "./buttons/MenuButton"
import MenuTooltip from "./tooltip/MenuTooltip"
import LogoImage from "../images/logo_feather_2.png" // Import the logo image
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  // GraphQL query to fetch the description
  const data = useStaticQuery(graphql`
    query {
      allContentfulCornfieldFront {
        edges {
          node {
            description
          }
        }
      }
    }
  `)

  const description = data.allContentfulCornfieldFront.edges[0].node.description

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <MyLink to="/">
        <Logo src={LogoImage} alt="Logo" /> {/* Static PNG logo */}
        <DescriptionText>{description}</DescriptionText>{" "}
        {/* Description from data */}
      </MyLink>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: "/images/icons/hamburger.svg", link: "/" }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MyLink = styled(Link)`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 44px;
  width: 44px;
  margin-right: 10px;
`

const DescriptionText = styled.div`
  font-size: 22px;
  color: hsla(77.58620689655173, 70.73170731707314%, 83.92156862745097%, 0.532);
  font-weight: 800;
  text-align: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
  z-index: 1000;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
