import "./App.css";
import theme from "./Theme";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <h1>FoodnDate</h1>
      <form action="../../api" method="post">
        <button type="submit">Connected?</button>
      </form>
      <AboutUs/>
    </div>
  );
}

export default App;
