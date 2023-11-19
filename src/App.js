import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Yejin Kim</footer>
      </div>
    </div>
  );
}

export default App;
