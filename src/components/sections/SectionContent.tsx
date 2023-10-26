import React from "react"
import styled from "styled-components"

import { useRenderHtmlAst } from "../../functions/useRenderHtmlAst"

function SectionContent(props) {
  const { htmlAst } = props

  return <Wrapper>{useRenderHtmlAst(htmlAst)}</Wrapper>
}

export default SectionContent

const Wrapper = styled.div`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  max-width: 712px;
  margin: 0 auto;
  text-align: start;
  padding: 0px 20px 100px;

  @media (max-width: 414px) {
    font-size: 17px;
  }

  img,
  video {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  iframe {
    margin: 20px 0;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  h2 {
    padding: 20px 0;
    font-size: 32px;
    line-height: 120%;
  }

  h3 {
    padding: 20px 0 0;
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.7;
  }

  h2,
  h3 {
    margin-top: 50px;
  }

  p {
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: rgb(32, 16, 148);
  }

  blockquote {
    padding: 0 16px 0 50px;
    background-repeat: no-repeat;
    background-position: 14px 2px;
    p {
      font-size: 28px;
      font-weight: 500;
      line-height: 140%;
    }
  }

  pre {
    border-radius: 16px;
  }

  code {
    font-size: 17px;
    font-family: "SF Mono", -apple-system, system-ui, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
  }

  ol {
    padding: 0;
  }

  @media (max-width: 740px) {
    font-size: 18px;
    padding: 0 30px;

    .Content {
      margin: 50px 20px;
    }
    p {
      font-size: 18px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 414px) {
    padding: 0 20px;
    code {
      font-size: 15px;
    }
    blockquote {
      margin: 0;
      p {
        font-size: 17px;
      }
    }
  }
`
