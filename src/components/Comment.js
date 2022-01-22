export default function Comment({ comment }) {
  return (
    <div>
      <h5>{comment.title}</h5>
      <p>&ldquo;{comment.message}&rdquo;</p>
      <p>
        <span className="mute">{comment.author}</span>
      </p>
    </div>
  );
}
