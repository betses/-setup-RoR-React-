import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Message from './components/message';

const App = () => (
  <div className="w-full bg-[#242424] ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
