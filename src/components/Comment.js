export default function Comment({ comments }) {
  return (
    <div>
      <h5>{comments[0].title}</h5>
      <p>&ldquo;{comments[0].message}&rdquo;</p>
      <p>
        <span className="mute">{comments[0].author}</span>
      </p>
    </div>
  );
}
