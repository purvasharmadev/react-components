import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Comment from "./Components/Twitter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Comment />
  </StrictMode>,
  rootElement
);
