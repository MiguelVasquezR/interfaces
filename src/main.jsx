import "regenerator-runtime/runtime";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import InfoPage from "./views/InfoPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/info/:id" element={<InfoPage />} />
    </Routes>
  </BrowserRouter>
);
