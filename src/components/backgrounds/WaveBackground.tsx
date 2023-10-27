import React from "react"
import styled from "styled-components"

const WaveBackground = () => {
  return (
    <Wrapper>
      <Background />
      <Wave
        src="/images/waves/hero-wave1.svg"
        style={{ top: "450px", filter: "blur(3px)" }}
      />
      <Wave src="/images/waves/hero-wave2.svg" style={{ top: "600px" }} />
      <Wave src="/images/waves/hero-wave3.svg" style={{ top: "650px" }} />
    </Wrapper>
  )
}

export default WaveBackground

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  width: 100%;

  z-index: -1;
`

const Background = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 60.38%);
  position: absolute;
  width: 100%;
  height: 850px;
  z-index: -1;
`
