
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './HomePage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element = {<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
