import React from "react"
import { graphql } from "gatsby";

export default function Blog({ data }) {

    const posts = data.allMarkdownRemark.edges.map(({ node: post }) => {
        return (
            <div>
                <h1>{ post.frontmatter.title }</h1>
                <p>{ post.excerpt }</p>
            </div>
        )
    });

    return (
        <>
            <h1>Blog Posts 1</h1>
            { posts }
        </>
    );
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {language: {eq: "fr"}}}) {
    edges {
      node {
        excerpt
        frontmatter {
          description
          title
          author
          categories
          date
          language
          tags
        }
      }
    }
  }
}
`
