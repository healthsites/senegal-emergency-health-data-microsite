import React from "react"
import { graphql } from "gatsby"

// let language = 'en'

export default function Blog({ data }) {

    // const listing = data.allMarkdownRemark.edges.map((edge) => {
    //     return(
    //         <div>
    //             <h1>{edge.node.frontmatter.title}</h1>
    //             <h2>{edge.node.frontmatter.description}</h2>
    //             <p>{edge.node.frontmatter.author}</p>
    //             <p>{edge.node.frontmatter.date}</p>
    //         </div>
    //     )
    // });

    return (
        <div>
            <h1>Blog Posts</h1>
        </div>
    )
};

// export const postsQuery = graphql`
//   query postsQuery($locale: String!) {
//     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts\\/.+\\\\.md$/"}}) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             language
//             author
//             date(fromNow: true, locale: $locale)
//             description
//             thumbnail
//           }
//           html
//         }
//       }
//     }
//   }
// `
