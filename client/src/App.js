import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import Hotle from "./component/hotle/Hotle";
import List from "./component/list/List";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotles" element={<List />} />
        <Route path="/hotles/:id" element={<Hotle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
