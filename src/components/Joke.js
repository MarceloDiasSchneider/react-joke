function Joke({setup, punchline}) {
  return(
    <div>
      <h3 style={{display: setup ? 'block' : 'none'}}>Setup: {setup}</h3>
      {punchline && <p>Punchline: {punchline}</p>}
      <hr />
    </div>
  )
}

export default Joke