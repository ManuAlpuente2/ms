import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import CompaniesContext from "./contexts/CompaniesContext";
import "./App.scss";
import Header from "./modules/Header";
import "./assets/icons/style.css";
import data from "./mocks/dataCompany.js";
import PageCompany from "./modules/PageCompany";
import PageLists from "./modules/PageLists";

function App() {
  const [companies, setCompanies] = useState(null);
  const companiesValue = { companies, setCompanies };
  useEffect(() => {
    setCompanies(data);
  }, []);
  return (
    <HashRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <CompaniesContext.Provider value={companiesValue}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/companies/0" />} />
            <Route path="/companies/:id" element={<PageCompany />} />
            <Route path="/lists" element={<PageLists data={data} />} />
          </Routes>
        </div>
      </CompaniesContext.Provider>
    </HashRouter>
  );
}

export default App;
