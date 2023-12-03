// const path = require(`path`)
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const sectionTemplate = path.resolve(`src/templates/section.tsx`)
//   const result = await graphql(`
//     {
//       allContentfulCornfieldFront {
//         edges {
//           node {
//             title
//             description
//             section {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   const sections =
//     result.data.allContentfulCornfieldFront.edges[0].node.section

//   sections.forEach(section => {
//     createPage({
//       path: `${section.slug}`,
//       component: sectionTemplate,
//       context: {
//         slug: section.slug,
//       },
//     })
//   })
// }

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sectionTemplate = path.resolve(`src/templates/section.tsx`)
  const result = await graphql(`
    {
      allContentfulCornfieldFront {
        edges {
          node {
            title
            description
            section {
              slug
            }
          }
        }
      }
    }
  `)

  const sections =
    result.data.allContentfulCornfieldFront.edges[0].node.section || []

  sections.forEach(section => {
    const slug = section.slug || "/" // Use a default slug or handle it based on your logic
    createPage({
      path: `/${slug}`, // Assuming you want the URL to be like "/{slug}"
      component: sectionTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
