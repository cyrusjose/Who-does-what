import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
