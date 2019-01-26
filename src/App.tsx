import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
class App extends Component<{}, any> {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/spec" exact component={() => <div>Spec</div>} />
          <Route path="/join" exact component={() => <div>Join</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
