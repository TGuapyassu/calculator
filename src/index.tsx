import Inicio from 'Components/inicio';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route index element={<Inicio />} />
    </Routes>
  </Router>
);
