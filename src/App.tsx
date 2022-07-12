import React from "react";
import { ChildFC } from "./Child";
import UserSearch from "./UserSearch";

const App = () => {
  return (
    <div>
      I am parent.
      <hr />
      {/* <ChildFC title="Nikhil">Demo</ChildFC> */}
      <UserSearch />
    </div>
  );
};

export default App;
