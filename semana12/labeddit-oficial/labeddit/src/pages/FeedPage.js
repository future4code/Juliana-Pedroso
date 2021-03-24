import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants/parameters";
import { goToPostsDetailPage } from "../routes/Coordinators";
import useProtectedPage from "../hooks/useProtectedPage";
import SimpleCard from "../components/SimpleCard";
import { StyleSimpleCard, LoadingGIF } from "../components/styled";
import Loading from "../img/loading.gif";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const FeedPage = (props) => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputText, setinputText] = useState("");
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

    setIsLoading(true);
    axios
      .get(`${BASE_URL}/posts`, authorization)
      .then((res) => {
        console.log(res.data.posts);
        setFeed(res.data.posts);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickCard = (id) => {
    goToPostsDetailPage(history, id);
  };

  const handleVotePost = (postId, direction) => {
    const body = {
      direction: direction,
    };

    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios
      .put(`${BASE_URL}/posts/${postId}/vote`, body, authorization)
      .then((res) => {
        alert("Você votou!");
        showFeed();
      })
      .catch((err) => {
        alert("Poxa, não foi possível curtir o post :(");
        console.error(err);
      });
  };

  const onChangeInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onChangeInputDescription = (e) => {
    setInputDescription(e.target.value);
  };

  const createPost = () => {
    const body = {
      title: inputTitle,
      text: inputDescription,
    };

    const authorization = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts`, body, authorization)
      .then((res) => {
        alert("Post criado com sucesso!");
        showFeed();
        setInputTitle("");
        setInputDescription("");
      })
      .catch((err) => {
        alert("Não foi possível criar novo post, tente novamente...");
        console.error(err);
      });
  };

  const onChangeInputText = (e) => {
    setinputText(e.target.value);
  };

  const filterFeed = () => {
    return feed
      .filter((post) => {
        const title = post.title.toLowerCase();
        return title.indexOf(inputText.toLowerCase()) > -1;
      })
  }; 

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      >
        <TextField 
        onChange={onChangeInputText}
        value={inputText}
        placeholder="Buscar por título..." 
        style={{ width: "30vw" }}/>
      </div>

      <StyleSimpleCard>
        <TextField
          onChange={onChangeInputTitle}
          value={inputTitle}
          variant="outlined"
          margin="normal"
          required
          name="title"
          label="Título"
          id="title"
          autoFocus
        />
        <TextField
          onChange={onChangeInputDescription}
          value={inputDescription}
          variant="outlined"
          margin="normal"
          required
          name="description"
          label="Descrição do post"
          id="description"
          autoFocus
        />
        <Button onClick={createPost}>
          <AddCircleIcon style={{ fontSize: 50, color: "#0079d3" }} />
        </Button>

        {isLoading && (
          <LoadingGIF
            src={Loading}
            alt="GIF loading"
            style={{
              display: "flex",
              flexGrow: "1",
              justifyContent: "center",
              alignSelf: "center",
              justifyItems: "center",
            }}
          />
        )}
        {filterFeed().map((post) => {
          return (
            <div>
              <SimpleCard
                key={post.id}
                post={post}
                username={post.username}
                title={post.title}
                text={post.text}
                onClickCard={() => onClickCard(post.id)}
                commentsCount={post.commentsCount}
                votesCount={post.votesCount}
                handleVotePost={handleVotePost}
              ></SimpleCard>
            </div>
          );
        })}
      </StyleSimpleCard>
    </>
  );
};

export default FeedPage;
