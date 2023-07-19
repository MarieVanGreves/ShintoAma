import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
