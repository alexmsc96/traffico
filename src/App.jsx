import classes from "./App.module.scss";
import Top from "./components/Top/Top";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import HowToApply from "./components/HowToApply/HowToApply";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes.Container}>
      <Router>
        <Sidebar />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Top />
            <About />
            <HowToApply />
            <Faqs />
            <Footer />
          </Route>
          <Route path="/work-in-progress">
            <WorkInProgress />
          </Route>
          <Route path="*">
            <WorkInProgress />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
