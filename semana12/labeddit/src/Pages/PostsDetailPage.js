import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/parameters";
import useProtectedPage from "../hooks/useProtectedPage";
import { useHistory, useParams } from "react-router-dom";
import { goToCommentsPage } from "../routes/Coordinators";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  StyleCommentsCard,
  StylePostCard
} from "../components/styled";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import AddCommentIcon from "@material-ui/icons/AddComment";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const PostsDetailPage = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();

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
        return (
          <StylePostCard>
            <Card variant="outlined">
              <CardContent style={{ height: "20vh", overflowY: "auto" }}>
                <Typography component="h1" color="textSecondary">
                  <strong>{post.title.toUpperCase()}</strong>
                </Typography>
                <br />

                <Typography color="textSecondary">
                  {post.username.toUpperCase()}
                </Typography>
                <br />

                <Typography variant="body2" component="p">
                  {post.text}
                </Typography>
              </CardContent>
            </Card>
          </StylePostCard>
        );
      })}

      {comments.map((comment) => {
        return (
          <StyleCommentsCard key={comment.id}>
            <Card variant="outlined">
              <h4>{comment.username.toUpperCase()}</h4>
              <p>"{comment.text}"</p>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button>
                  <ArrowUpwardIcon style={{ color: "green" }} />
                  <p>{comment.votesCount}</p>
                  <ArrowDownwardIcon style={{ color: "#ff4500" }} />
                </Button>

                <Button>
                  <AddCommentIcon style={{ color: "#0079d3" }} />
                </Button>
              </CardActions>
            </Card>
          </StyleCommentsCard>
        );
      })}
      <Button onClick={() => goToCommentsPage(history)}>
        <AddCircleIcon style={{ fontSize: 70, color: "#0079d3" }} />
      </Button>
    </div>
  );
};

export default PostsDetailPage;
