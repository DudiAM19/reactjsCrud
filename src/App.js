import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./component/ProductList";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/add">
          <AddUser />
        </Route>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;