import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red
  }
});
