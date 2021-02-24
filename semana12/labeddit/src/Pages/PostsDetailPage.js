import React from 'react';
import useProtectedPage from "../hooks/useProtectedPage";

const PostsDetailPage = () => {
    useProtectedPage();

    return(
        <p>PostsPage</p>
    )
}

export default PostsDetailPage;