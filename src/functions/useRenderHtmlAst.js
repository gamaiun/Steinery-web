// import { createElement, useMemo } from "react"
// import { unified } from "unified"
// import rehypeReact from "rehype-react"
// import styled from "styled-components"

// export const renderHtmlAst = htmlAst =>
//   useMemo(() => {
//     const processor = unified().use(rehypeReact, {
//       createElement,
//     })

//     return processor.stringify(htmlAst)
//   }, [htmlAst])

import { createElement, useMemo, Fragment } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { unified } from "unified"
import rehypeReact from "rehype-react"

export const useRenderHtmlAst = htmlAst => {
  return useMemo(() => {
    const processor = unified().use(rehypeReact, {
      createElement,
      Fragment,
      jsx,
      jsxs,
    })

    return processor.stringify(htmlAst)
  }, [htmlAst])
}
