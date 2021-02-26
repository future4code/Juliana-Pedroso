import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const SimpleCard = (props) => {
  return (
    <Card variant="outlined">
      <CardActions>
        <span>{props.votesCount}</span>
        <Button>
          <ArrowUpwardIcon onClick={props.onClickVoteUp}/>
          <ArrowDownwardIcon onClick={props.onClickVoteDown}/>
        </Button>
      </CardActions>
      <CardContent style={{ height: "20vh", overflowY: "auto" }}>
        <Typography component="h1" color="textSecondary">
          <strong>{props.title.toUpperCase()}</strong>
        </Typography>
        <br />

        <Typography color="textSecondary">
          {props.username.toUpperCase()}
        </Typography>
        <br />

        <Typography variant="body2" component="p">
          {props.text}
          <br />
        </Typography>
      </CardContent>
      

      <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={props.onClickCard} size="small">
          Detalhes
        </Button>
        <Button onClick={props.onClickCard} size="small">{props.commentsCount} Comentários</Button>
      </CardActions>
    </Card>
  );
};

export default SimpleCard;
