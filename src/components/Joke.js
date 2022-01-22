import Comment from "./Comment";

function Joke({ setup, punchline, upvotes, donwvotes, comments }) {
  comments = comments ? comments.map((comment, key)=> <Comment key={key} comment={comment}/>) : '' ;
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
      {comments && comments}
      <hr />
    </div>
  );
}

export default Joke;
