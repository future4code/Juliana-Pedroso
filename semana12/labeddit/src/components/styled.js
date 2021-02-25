import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";

export const StyledCard = styled(Card)`
  /* max-height: 300px; */
  min-width: 20vw;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyleSimpleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  height: auto;
  grid-gap: 1rem;
  margin: 2rem 1rem;
`;
