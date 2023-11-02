import React from "react"
import styled, { keyframes } from "styled-components"

const Circles = () => {
  return (
    <Wrapper>
      <Circle />
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </Wrapper>
  )
}

export default Circles

const scale = keyframes`
    
    0% {transform: scale(1)}
    100% {transform: scale(1.5)}
`

const Wrapper = styled.div`
  width: 420px;
  height: 420px;
`

const Circle = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: linear-gradient(
    180deg,
    #9fe1ff 0%,
    rgba(0, 7, 10, 0.085) 70.94%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 310px;
  left: calc(50% - 420px / 2);
  top: calc(50% - 420px / 2);
  animation: ${scale} 10s 1s linear forwards;
`

const Circle1 = styled(Circle)`
  width: 320px;
  height: 320px;
  border-radius: 310px;
  left: calc(50% - 320px / 2);
  top: calc(50% - 320px / 2);
`

const Circle2 = styled(Circle)`
  width: 260px;
  height: 260px;
  border-radius: 135px;
  left: calc(50% - 260px / 2);
  top: calc(50% - 260px / 2);
`

const Circle3 = styled(Circle)`
  width: 210px;
  height: 210px;
  border-radius: 135px;
  left: calc(50% - 210px / 2);
  top: calc(50% - 210px / 2);
`
