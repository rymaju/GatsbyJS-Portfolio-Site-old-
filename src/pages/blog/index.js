import React from 'react';
import BlogLayout from "../../components/blogLayout";

//Blog index page that will display my blog posts sorted by date
//you will be able to click on the posts and read them too!

const BlogIndex = () => {
    return(
        <BlogLayout>
            <h2>Header</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis, ligula vitae dictum vestibulum, felis ex tincidunt diam, vel mollis lorem augue varius lectus. Nunc euismod tempus massa eget luctus. Nullam tempus orci quis quam ultrices consequat. Aliquam sollicitudin nec nunc in lobortis. Suspendisse eget orci eu sapien pharetra posuere at sit amet turpis. Vestibulum ac risus non massa eleifend ultrices. Nam commodo orci et libero ornare, nec cursus lectus pulvinar. Sed eget velit euismod, ultricies arcu vitae, volutpat odio. Suspendisse sed metus sit amet massa finibus porta in nec urna.

Nullam pharetra risus at magna dapibus</p>
        </BlogLayout>
    );
}

export default BlogIndex;