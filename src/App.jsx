import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Router basename="/blog/">
      <main>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;