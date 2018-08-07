import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";
export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
    error: red
  }
});
