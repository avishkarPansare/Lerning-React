import React from "react";
import "./style.css";

import Button from "./Button";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Button Component</h1>
      <div className="row">
        <center>
            <Button />
            <Button title="App Store" />
            <Button title="Play Store" />
            <Button />
        </center>
      </div>
      
      {/* <button className="button">App Store</button>
      <button className="button">Play Store</button> */}
    </div>
  );
};

export default App;
