import Comment from "./Comment";

function Joke({ setup, punchline, upvotes, donwvotes, comments }) {
  return (
    <div>
      <h3 style={{ display: setup ? "block" : "none" }}>Setup: {setup}</h3>
      {punchline && <p>Punchline: {punchline}</p>}
      { upvotes && donwvotes &&
        <p>
          <span className="mute">upvotes: </span>
          {upvotes}
          <span className="mute"> | downvotes: </span>
          {donwvotes}
        </p>
      }
      { comments && 
        <Comment comments={comments} />
      }
      <hr />
    </div>
  );
}

export default Joke;
