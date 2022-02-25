import "/src/styles.css";
import { useState } from "react";

export default function App() {
  // UseState to indicate the length of string user is typing
  const [indicate, setIndicate] = useState("");

  // UseState to disable the textarea after the limit is reached
  const [disable, setDisable] = useState(false);

  // UseState to show the text on webpage
  const [tweet, setTweet] = useState("");

  // UseState to change the button text acc. to input.
  const [show, setShow] = useState("tweet");

  //UseState to change the input border for error
  const [error, setError] = useState("red");

  // Function to handle on Change event
  function changeHandler(event) {
    const text = event.target.value;
    calChar(text);
    setTweet(text);
  }

  // Function to calculate the text length
  function calChar(text) {
    const len = text.length;
    setIndicate(len > 10 ? disableTextArea : len);
  }

  // Function to disable the textarea
  function disableTextArea() {
    setDisable(true);
    setIndicate("sorry you have reached the limit!");
    setShow("go back");
  }

  return (
    <div className="App">
      <h1>React Practise Questions</h1>
      <ol>
        {/* Question */}
        <li>
          See the Twitter post component. It gives you an indicator of the
          character count. Replicate that behavior.
        </li>

        <br />
        {/* Solution */}
        <textarea
          style={{
            border: "2px",
            borderStyle: "solid",
            borderColor: { error }
          }}
          onChange={changeHandler}
          disabled={disable}
        ></textarea>
        <p>
          {indicate}
          <button
            onClick={(text) => {
              setDisable(false);
              setShow("tweet");
            }}
          >
            {show}
          </button>

          <p>{tweet}</p>
        </p>
      </ol>
    </div>
  );
}
