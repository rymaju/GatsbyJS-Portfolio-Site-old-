import React from "react";
import BlogLayout from "../../components/blogLayout";
import { graphql, Link } from "gatsby";
import SEO from "../../components/seo";

//Blog index page that will display my blog posts sorted by date
//you will be able to click on the posts and read them too!

const BlogIndex = ({ data }) => {
    return (
        <BlogLayout>
            <SEO
                title="Ryan Jung's Blog"
                description="A blog about my computer science projects and education."
            />
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h2>
                            {node.frontmatter.title} - {node.frontmatter.date}
                        </h2>
                    </Link>
                    <p>{node.excerpt.slice(0, 250)}</p>
                </div>
            ))}
        </BlogLayout>
    );
};

export default BlogIndex;

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
