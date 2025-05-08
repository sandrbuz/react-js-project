import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Some from "./pages/Some";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/some" element={<Some />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
