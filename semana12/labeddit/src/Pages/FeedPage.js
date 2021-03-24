import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL, superUser } from "../constants/parameters";
import { goToPostsDetailPage } from "../routes/Coordinators";
import useProtectedPage from "../hooks/useProtectedPage";
import SimpleCard from "../components/SimpleCard";
import { StyleSimpleCard } from "../components/styled";
import { useParams } from "react-router-dom";

const FeedPage = () => {
  const params = useParams();
  const [feed, setFeed] = useState([]);
  const [vote, setVote] = useState(true);
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
    goToPostsDetailPage(history, id);
  };

  const onClickVoteUp = () => {
    alert("Você gostou!")
  }

  const onClickVoteDown = () => {
    alert("Você não curtiu!")
  }

  const votePost = (postId, direction) => {
    const body = {
      direction: direction
    }
    const headers = {
      Authorization: localStorage.getItem("token")
    }
    axios.put(`${BASE_URL}/posts/${postId}/vote`, body, {headers})
      .then((res) => {
        setVote(!vote)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // const votePost = (id, decision, userVoteDirection) => {
  //   let body = {};
  //   if (userVoteDirection === decision) {
  //     body = { direction: 0 };
  //   } else {
  //     body = { direction: decision };
  //   }

  //   axios
  //     .put(`${BASE_URL}/posts/${params.id}/vote`, body, authorization)
  //     .then((res) => {
  //       console.log(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // };

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
              onClickVoteUp={() => onClickVoteUp(item.id + 1)}
              onClickVoteDown={() => onClickVoteDown(item.id - 1)}
              commentsCount={item.commentsCount}
              votesCount={item.votesCount}
            ></SimpleCard>
          </div>
        );
      })}
    </StyleSimpleCard>
  );
};

export default FeedPage;
