import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
      }}
    >
      <Text>© {new Date().getFullYear()} &middot; Built by Gamaiun</Text>
      <Wave src="/images/waves/footer-wave3.svg" />
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;
`

const Text = styled.div`
  position: absolute;
  width: 100%;
  text-align: center; // To center the text horizontally
  bottom: 20px; // Adjust this value to position the text vertically
  z-index: 2; // To ensure the text stays on top
  color: aliceblue;
`

const Wave = styled.img`
  position: relative;
  width: 100%;
  z-index: 1;
`
