import React from "react"
import styled from "styled-components"

function PurchaseButton() {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon src="/images/logos/logo_w.png" alt="button_icon_alt" />
        {/* <Ring src="/images/icons/icon-ring.svg" alt="button_ring_alt" /> */}
      </IconWrapper>
      <TextWrapper>
        <Title>לרכישת הספר</Title>
        {/* <Subtitle>to our monthly newsletter</Subtitle> */}
      </TextWrapper>
    </Wrapper>
  )
}

export default PurchaseButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #c0cffc 40%, #98aeff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  text-align: start;
`

const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: rgb(97, 121, 200);
  text-transform: uppercase;
`

const Subtitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 45px;
  height: 45px;
  ${Wrapper}:hover & {
    transform: rotate(45deg) scale(1.2) translate(1px, 1px);
  }
`

const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  ${Wrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  /* background: linear-gradient(200.44deg, #f1eeb3 13.57%, #ffffff 98.38%); */
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(180%) saturate(0%);
  }
`
