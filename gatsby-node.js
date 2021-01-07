const path = require("path");


exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/post.js');

    return graphql(`   
{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/.+\\\\.md$/"}}) {
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          language
        }
      }
    }
  }
}
	`).then(result => {
        if (result.errors) {
            Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: 'post/' + (node.frontmatter.language !== 'en' ? node.frontmatter.language + '/' : '') + path.basename(node.fileAbsolutePath, '.md'),
                component: postTemplate,
                context: {
                    pathRegex: '/' + path.basename(node.fileAbsolutePath) + '$/'
                }
            });
        });
    });

};
