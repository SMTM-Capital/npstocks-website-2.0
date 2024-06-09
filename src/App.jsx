import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App
