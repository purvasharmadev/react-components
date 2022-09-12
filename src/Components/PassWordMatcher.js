import "/src/styles.css";
import { useState } from "react";

export default function PassWordMatcher() {
  // signup form
  // two inputs states
  // one error state
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);

  function formHandler(e) {
    e.preventDefault();
    console.log(password === newPassword);
    password !== newPassword && setError(true);
  }

  return (
    <div className="App">
      <p>
        2. Any signup form, password reset form has this functionality. Take two
        passwords from user. Show error only if both passwords don't match.
      </p>
      {error && <h2>Password u entered does not match trye again !!</h2>}
      <form onSubmit={formHandler}>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="enter password again"
          type="password"
        />
        <button>Set Password</button>
      </form>
    </div>
  );
}
