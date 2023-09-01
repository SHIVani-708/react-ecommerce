import { Fragment } from "react";
import "./App.css";
import AvailableItem from "./component/AvailableItem";
import Nav from "./component/Nav";
function App() {
  return (
    <Fragment>
      <Nav/>
      <AvailableItem/>
    </Fragment>
  );
}

export default App;
