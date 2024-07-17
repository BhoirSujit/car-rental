import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import './App.css';
import CarList from "./pages/CarList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/carlist" Component={CarList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
