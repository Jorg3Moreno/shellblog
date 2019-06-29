import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./menu";
import Users from "./users";
import Tasks from "./tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Route exact path="/" component={Users} />
        <Route exact path="/task" component={Tasks} />
      </div>
    </BrowserRouter>
  );
};

export default App;
