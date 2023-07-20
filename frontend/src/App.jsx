import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./component/NavBar/NavBar";
import Temples from "./pages/Temples/Temples";
import Histoire from "./pages/Histoire/Histoire";
import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/Histoire" element={<Histoire />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
