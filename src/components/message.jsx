import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/message';

const Message = () => {
  const message = useSelector((store) => store.message);
  const dispatch = useDispatch();

  console.log(message);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <h3>Message page</h3>
      <Link to="/">Home</Link>
      <h1>{message.message}</h1>
    </div>
  );
};

export default Message;
