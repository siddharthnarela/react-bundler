import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Start editing to see some magic happen!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
