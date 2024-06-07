import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Box_dashboard from "./components/Box_dashboard.js"
import Side_bar from "./components/Side_bar.js"

function Landingpage() {
  return (
    <Router>

      <Routes>
      <Route path="/t" element={<Box_dashboard />} />
      <Route path="/" element={<Side_bar />} />
      </Routes>

    </Router>
  );
}

export default Landingpage;
