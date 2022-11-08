import './App.css';
// import bookstores
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
// import components
import DataContext from './context/DataContext'
import Beginning from './components/Beginning/Beginning';
import Live from './components/Live/Live';

function App() {
  return (
    <DataContext>
      <Routes>
        <Route path="/" element={<Beginning />} />
        <Route path="*" element={<Beginning />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </DataContext>
  );
}

export default App;
