import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-3xl font-sans text-md flex flex-col items-center justify-center min-h-screen py-2  text-white">
      <h1>Welcome to the Quiz App</h1>

      <Link href="/quiz" className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white" >
        Start Quiz
      </Link>
    </div>
  );
};

export default Home;