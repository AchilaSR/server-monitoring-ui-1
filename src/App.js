import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Box_dashboard from "./components/Box_dashboard.js"

function Landingpage() {
  return (
    <Router>

      <Routes>
      <Route path="/" element={<Box_dashboard />} />
      </Routes>

    </Router>
  );
}

export default Landingpage;
