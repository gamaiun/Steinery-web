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
