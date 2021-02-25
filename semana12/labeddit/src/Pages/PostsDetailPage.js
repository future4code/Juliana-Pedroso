import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";
import useProtectedPage from "../hooks/useProtectedPage";
import { useParams } from "react-router-dom";

const PostsDetailPage = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);

  useProtectedPage();

  useEffect(() => {
    showPostDetail();
  }, []);

  const showPostDetail = () => {
    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts/${params.id}`, authorization)
      .then((res) => {
        console.log(res.data.post);
        setDetails([res.data.post]);
        setComments(res.data.post.comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        {details.map((post) => {
            return(
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.username}</p>
                    <p>{post.text}</p>
                </div>
            )
        })}

        {comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <p>{comment.username}</p>
                    <p>{comment.text}</p>
                    <p>{comment.comments.votesCount}</p>
                </div>
            )
        })}
    </div>
  );
};

export default PostsDetailPage;
