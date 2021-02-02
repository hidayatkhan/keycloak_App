import Welcome from "./Welcome";
import Secured from "./Secured";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Public Component</Link>
          </li>
          <li>
            <Link to="/secured"> Secured Component</Link>
          </li>
        </ul>
        <Route exact path="/" component={Welcome} />
        <Route path="/secured" component={Secured} />
      </div>
    </BrowserRouter>
  );
}

export default App;
