import Joke from "./components/Joke";

function App() {
  return (
    <div className="container">
      <Joke punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvotes={10}
        donwvotes={2}
        comments={[{author: "Marcelo Schneider", title: "Good joke", message: "It's a good joke!!"}]}
        
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  );
}

export default App;
