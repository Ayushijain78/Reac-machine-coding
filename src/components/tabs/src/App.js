import "./App.css";
import TabPanel from "./tabs/TabPanel";
import TabHeader from "./tabs/TabHeader";
import { useState } from "react";
import { Tab_CONFIG } from "./tabs/utils";

function App() {
  const [selectedTabId, setSelectedTabId] = useState(1);
 
  const handleTabClick = (tabId) => {
    setSelectedTabId(tabId);
  };
  const selectedTab = Tab_CONFIG.find((tab) => tab.id === selectedTabId);
  return (
    <div className="App">
      <h1>Tabs</h1>
      <div className="tabs-container">
        <TabHeader
          header={Tab_CONFIG}
          handleTabClick={handleTabClick}
          selectedTabId={selectedTabId}
        />
        <TabPanel content={selectedTab.content} image={selectedTab.image} />
      </div>
    </div>
  );
}

export default App;
