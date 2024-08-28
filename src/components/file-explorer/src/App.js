import logo from './logo.svg';
import './App.css';
import FileExplorer from './components/FileExplorer';
import { FILE_EXPLORER } from './components/config';

function App() {
  return (
    <div className="App">
      <FileExplorer fileData={FILE_EXPLORER}/>
    </div>
  );
}

export default App;
