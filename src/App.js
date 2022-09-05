import './App.css';
import NewProduct from './components/NewProduct';
import Profile from './components/Profile';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='flex '>
      <Profile />

      <Routes>
        <Route path="/product" element={<NewProduct />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
