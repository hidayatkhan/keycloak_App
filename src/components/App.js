import Welcome from "./Welcome";
import Secured from "./Secured";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Nav";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/Login" component={Secured} />
      </Switch>
    </Router>
  );
}

export default App;
