const path = require("path");


exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve('src/templates/post.js');
    const blogTemplate = path.resolve('src/templates/blog.js');

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

        const created = [];

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: 'blog/' + (node.frontmatter.language !== 'en' ? node.frontmatter.language + '/' : '') + path.basename(node.fileAbsolutePath, '.md'),
                component: postTemplate,
                context: {
                    pathRegex: '/' + path.basename(node.fileAbsolutePath) + '$/'
                }
            });

            if(created.indexOf(node.frontmatter.language) !== -1) {

                createPage({
                    path: 'blog' + (node.frontmatter.language !== 'en' ? '/' + node.frontmatter.language : ''),
                    component: blogTemplate,
                    context: {
                        language: node.frontmatter.language
                    }
                });

                created.push(node.frontmatter.language);
            }
        });




    });

};
