import "./App.css";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <h1>FoodnDate</h1>
      <form action="../../api" method="post">
        <button type="submit">Connected?</button>
      </form>
    </div>
  );
}

export default App;
