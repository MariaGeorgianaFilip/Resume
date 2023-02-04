import './App.scss';
import { Routes, Route } from "react-router-dom";
import {Home} from './views/Home';

function App() {

  return (
    <main className="main-app">
       <Routes>
        <Route path="/resume/:name" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
