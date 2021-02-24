import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL, superUser } from "../constants/parameters";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import useProtectedPage from "../hooks/useProtectedPage";

const FeedPage = () => {
  const [feed, setFeed] = useState([]);
  const history = useHistory();
  useProtectedPage();

  useEffect(() => {
    showFeed();
  }, []);

  const showFeed = () => {
    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts`, authorization)
      .then((res) => {
        console.log(res.data.posts);
        setFeed(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {feed.map((item) => {
        return (
          <Card key={item.id} item xs={12} sm={6} md={3} style={{ display: "grid", gridTemplateColumns: "repeat(2), 1fr" }}>
            <CardContent>
              <h4 color="textSecondary" gutterBottom>
                {item.username.toUpperCase()}
              </h4>
            </CardContent>

            <CardActions>
              <Typography
                color="textSecondary"
                gutterBottom
              >
                {item.text}
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default FeedPage;
