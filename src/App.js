import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Navbar from "./component/Navbar/navbar";
import Login from "./component/Login/login";
import Footer from "./component/Footer/footer";
import SignUP from "./component/SignUp/signup";
import homePage from "./pages/HomePage/homePage";
import Courses from "./pages/Courses/courses";
import createForum from "./pages/Forum/create/createForum";
import displayForum from "./pages/Forum/display/displayForum";
// Material-ui
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#51be78",
    },
    secondary: {
      main: "#183661",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="body">
          <Navbar />
          <Switch>
            <Route path="/" exact component={homePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUP} />
            <Route path="/courses" exact component={Courses} />
            <Route path="/create_forum" exact component={createForum} />
            <Route path="/display_forum" exact component={displayForum} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;