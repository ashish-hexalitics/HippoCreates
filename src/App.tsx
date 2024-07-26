import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {routes} from './routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
