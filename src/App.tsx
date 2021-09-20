import React from "react";
import "./styles/App.css";
import { GreetingWithInversify } from "./components/GreetingWithInversify";
// import Greeting from "./components/Greeting";
// import Posts from "./components/Users";
const App = () => {
  return (
    <div className='App'>
      {/* <Greeting friend={"Sam"} /> */}
      {/* <Posts /> */}
      <GreetingWithInversify />
    </div>
  );
};

export default App;
