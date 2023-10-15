import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Views/Home";
import Pokemon from "./Views/Pokemon";
import MoreInfo from "./Views/MoreInfo";
import NotFound from "./Views/NotFound";

function App() {
  return (
    <>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:name" element={<MoreInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
