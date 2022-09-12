import "/src/styles.css";
import { useState } from "react";

export default function Comment() {
  // UseState to indicate the length of string user is typing
  const [indicate, setIndicate] = useState("");

  // UseState for counter
  const [textCount, setTextCount] = useState(0);

  // UseState to show the text on webpage
  const [tweet, setTweet] = useState("");

  // UseState to change the button text acc. to input.
  const [show, setShow] = useState("tweet");

  //UseState to change the input border for error
  const [error, setError] = useState("black");
  const borderColor = {
    borderStyle: "solid",
    borderWidth: "2px",
    outline: "none",
    borderColor: error
  };

  // Function to calculate the text length
  function calChar(text) {
    const len = text.length;
    setIndicate(
      len > 10
        ? () => {
            setIndicate("limit Reached !!");
            setError("red");
          }
        : () => {
            setError("");
            setTextCount(len);
          }
    );
  }

  // Function to handle on Change event
  function changeHandler(event) {
    const text = event.target.value;
    calChar(text);
    text.length > 10
      ? alert("you have exceded the word limit")
      : setTweet(text);
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
        <textarea style={borderColor} onChange={changeHandler}></textarea>
        {textCount}

        <p>
          {indicate}
          <button
            onClick={(text) => {
              // setDisable(false);

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
