import React from "react"
import { graphql } from "gatsby";

export default function PostTemplate({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <div className="blog-post-container">
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.description}</h2>
                <p>{frontmatter.author}</p>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </div>
    )
}

export const query = graphql`
query ($pathRegex: String!) {
    markdownRemark(fileAbsolutePath: {regex: $pathRegex}) {
        html
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
`
