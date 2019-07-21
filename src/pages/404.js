import React from "react";

import BlogLayout from "../components/blogLayout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <BlogLayout>
        <SEO title="404: Not found" />
        <h1>Error 404</h1>
        <h2>Oops, the file you requested does not exist. ;-;</h2>

        <br />

        <p>
            Check out the navigation bar above to look at my portfolio,
            projects, or blog!
        </p>

        <br />
        <br />
    </BlogLayout>
);

export default NotFoundPage;
