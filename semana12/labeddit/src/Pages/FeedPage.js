import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL, superUser } from "../constants/parameters";
import { goToPostsDetailPage } from "../routes/Coordinators";
import useProtectedPage from "../hooks/useProtectedPage";
import SimpleCard from "../components/SimpleCard";
import { StyleSimpleCard } from "../components/styled";

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

  const onClickCard = (id) => {
    goToPostsDetailPage(history, id)
  };

  return (
    <StyleSimpleCard>
      {feed.map((item) => {
        return (
          <div>
            <SimpleCard
              key={item.id}
              username={item.username}
              title={item.title}
              text={item.text}
              onClickCard={() => onClickCard(item.id)}
            ></SimpleCard>
          </div>
        );
      })}
    </StyleSimpleCard>
  );
};

export default FeedPage;
