import { useEffect, useState } from "react";
import "./App.css";
import MultiSelect from "./components/MultiSelect";
import useDebounce from "./components/customhook/useDebounce";

// create input box
// call the api on search
// add debounce
// create multiselectDropdown
// onlcick selected should get added the to the input box

function App() {
  const [userData, setuserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getUserData = useDebounce(async (searchTerm) => {
    try {
      if (searchTerm.length > 0) {
        const response = await await fetch(
          `https://dummyjson.com/users/search?q=${searchTerm}`
        )
          .then((res) => res)
          .then((res) => res.json());
        setuserData(response?.users || []);
      }
    } catch (err) {
      console.log(err);
    }
  }, 1000);
  useEffect(() => {
    getUserData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1 className="head">Multi Select Option</h1>
      <MultiSelect userData={userData} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
