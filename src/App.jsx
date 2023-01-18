import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const getMessage = await fetch('http://localhost:3000/message');
      const res = await getMessage.json();
      setSuccess(res);
    };
    fetchData();

  }, []);
  return (
    <div className="App">
      <h2>setup RoR + React project as two apps</h2>
      <div className="card">
        <h3 className="read-the-docs">
          " {success.message} " This message is displayed from backend API
        </h3>
      </div>
    </div>
  )
}

export default App
