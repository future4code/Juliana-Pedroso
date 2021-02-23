import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor } from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: secundaryColor  ,
      contrastText: "#fff"
    }
  },
  text: {
      primary: "#000",
  }
});

export default theme;