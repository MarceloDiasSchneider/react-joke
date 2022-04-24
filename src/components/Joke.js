import { useState } from "react";
import Comment from "./Comment";

function Joke({ setup, punchline, upvotes, donwvotes, comments }) {
  comments = comments
    ? comments.map((comment, key) => <Comment key={key} comment={comment} />)
    : "";
  const [isShown, setIsShown] = useState(false);
  function toggleIsShown() {
    setIsShown((isShown) => !isShown);
  }

  return (
    <div>
      <h3 style={{ display: setup ? "block" : "none" }}>Setup: {setup}</h3>
      {((punchline && isShown) || !setup) && <p>Punchline: {punchline}</p>}
      {setup && <button onClick={toggleIsShown}>{ isShown ? "Hide":  "Show"} punchline</button>}
      {upvotes && donwvotes && (
        <p>
          <span className="mute">upvotes: </span>
          {upvotes}
          <span className="mute"> | downvotes: </span>
          {donwvotes}
        </p>
      )}
      {comments && comments}
      <hr />
    </div>
  );
}

export default Joke;
