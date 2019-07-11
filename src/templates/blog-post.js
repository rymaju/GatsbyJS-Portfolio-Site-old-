import React from "react";
import BlogLayout from "../components/blogLayout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
    const pageData = data.markdownRemark;
    //Its safe to use dangerouslySetInnerHTML because its from a trusted source (me) when I write HTML into my blog posts.
    return (
        <BlogLayout>
            <SEO title={pageData.frontmatter.title} />
            <h1 style={{ marginBottom: 0 }}>{pageData.frontmatter.title}</h1>
            <h3>
                {new Date(pageData.frontmatter.date).toLocaleDateString(
                    "default",
                    { year: "numeric", month: "long", day: "numeric" }
                )}
            </h3>

            <Link to="/blog/">
                <p>{"\u2190"} Back to Blog List</p>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
        </BlogLayout>
    );
};

//query: given $slug, find markdownRemark where slug equals $slug, and return the html and title.
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`;
