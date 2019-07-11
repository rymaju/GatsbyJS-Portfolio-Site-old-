import React from "react";

import BlogLayout from "../components/blogLayout";
import SEO from "../components/seo";

const NotFoundPage = () => (
    <BlogLayout>
        <SEO title="404: Not found" />
        <h1>Error 404</h1>
        <p>Oops, the file you requested does not exist. ;-;</p>
    </BlogLayout>
);

export default NotFoundPage;
