import "./App.css";
import AutoComplete from "./components/AutoComplete";
import { vpaSuffixes } from "./components/config";
// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(console.log);
function App() {
  return (
    <div className="App">
      <header className="App-header"> Auto Complete </header>
      <AutoComplete data={vpaSuffixes}/>
    </div>
  );
}

export default App;
