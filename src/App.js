import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Pricing from "./pages/pricing/Pricing";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/features" Component={Features} />
          <Route path="/pricing" Component={Pricing} />
          <Route path="/pricing2" Component={Pricing} />
        </Routes>
    </div>
  );
}

export default App;
