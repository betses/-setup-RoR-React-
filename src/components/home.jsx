import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center gap-10 h-screen">
    <h1 className="text-5xl font-bold text-white">
      setup RoR + React project as two apps
    </h1>
    <p className="text-white">Click the button below to view Diffrent Greetings From rails Database</p>
    <div>
      <Link to="/message" className="text-white bg-indigo-500 hover:bg-indigo-800 px-5 py-3 rounded-full">Message</Link>
    </div>
  </div>
);

export default Home;
