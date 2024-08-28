import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import {ThemeProvider } from "./components/hooks/theme-context";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme toggle</h1>
        <Header/>
        <div className="flex">
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
          <Portfolio />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
