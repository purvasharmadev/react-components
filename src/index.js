import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Comment from "./Components/Twitter";
import PassWordMatcher from "./Components/PassWordMatcher";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Comment />
    <PassWordMatcher />
  </StrictMode>,
  rootElement
);
