import { useState } from "react";
import Menu from "./components/Menu/Menu";
import MicrophonePage from "./views/MicrophonePage";
import HomePage from "./views/HomePage";
import TraslatePage from "./views/TraslatePage";

function App() {
  const [selectView, setSelectView] = useState("home");

  const handleSelectView = (view) => {
    setSelectView(view);
  };

  return (
    <div className="h-screen w-screen flex flex-col mb-[100px]">
      <div className="flex-1 overflow-y-auto">
        {selectView === "microphone" && <MicrophonePage />}
        {selectView === "home" && <HomePage />}
        {selectView === "traslate" && <TraslatePage />}
      </div>
      <div className="fixed bottom-0 w-full bg-gray-800">
        <Menu selectView={handleSelectView} />
      </div>
    </div>
  );
}

export default App;
