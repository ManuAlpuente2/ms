import "./App.scss";
import Header from "./modules/Header";
import "./assets/icons/style.css";
import data from "./mocks/dataCompany.js";
import PageCompany from "./modules/PageCompany";

function App() {
  return (
    <div className="App">
      <Header />
      <PageCompany data={data} />
    </div>
  );
}

export default App;
