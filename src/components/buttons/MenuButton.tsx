import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuButton(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem>
        <MenuItemName>{item.title}</MenuItemName>
        <img src={item.icon} alt={item.title} />
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: auto 24px;
  gap: 10px;
  align-items: center;
  text-align: end;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  img {
    width: 35px;
    height: 35px;
    justify-self: end;
  }

  div {
    justify-self: end;
    font-size: larger;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
const MenuItemName = styled.span`
  font-size: 17px;
  color: #799ad7;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding: 5px;
  display: inline-block;
  background-clip: padding-box;
  transition: color 0.3s ease;

  &:hover {
    color: #bad4ee;
  }
`
