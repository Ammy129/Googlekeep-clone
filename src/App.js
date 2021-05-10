import { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import Sidebar from "./Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Notes />
    </>
  );
}

export default App;
