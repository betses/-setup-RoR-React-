import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/message';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.message);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen text-white">
      <h1 className="text-5xl">{message.message}</h1>
      <Link to="/" className="bg-indigo-500 hover:bg-indigo-800 px-8   py-3 rounded-full">Back</Link>
    </div>
  );
};

export default Message;
