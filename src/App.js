import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Header from "./modules/Header";
import "./assets/icons/style.css";
import data from "./mocks/dataCompany.js";
import PageCompany from "./modules/PageCompany";
import PageLists from "./modules/PageLists";

function App() {
  return (
    <HashRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/lists" />} />
          <Route path="/companies/:id" element={<PageCompany data={data} />} />
          <Route path="/lists" element={<PageLists data={data} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
