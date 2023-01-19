import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/message';

function App() {
  const message = useSelector((store) => store.message);
  const dispatch = useDispatch();

  console.log(message);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <h2>setup RoR + React project as two apps</h2>
      <div className="card">
        <h3 className="read-the-docs">
          &quot;
          {' '}
          {message.message}
          {' '}
          &quot; This message is displayed from backend API
        </h3>
      </div>
    </div>
  );
}

export default App;
