import React from 'react';
import useProtectedPage from "../hooks/useProtectedPage";

const PostsPage = () => {
    useProtectedPage();

    return(
        <p>PostsPage</p>
    )
}

export default PostsPage;