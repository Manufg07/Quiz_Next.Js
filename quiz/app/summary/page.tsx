'use client'

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { quizData } from '../data/quizData';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizState {
  answers: number[];
}

const Summary: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const answersString = searchParams.get('answers');
  const answers = answersString ? JSON.parse(answersString) : [];

  const [quizState] = useState<QuizState>({ answers });

  const score = quizState.answers.reduce((acc, answer, index) => {
    return answer === quizData[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  const totalQuestions = quizData.length;

  const handleRestart = () => {
    router.push('/quiz'); 
  };

  const handleShare = () => {
    const shareData = {
      title: 'Quiz Results',
      text: `I scored ${score} out of ${totalQuestions} on this quiz!`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      alert(`I scored ${score} out of ${totalQuestions} on this quiz!`);
    }
  };

  return (
    <div className="quiz-container dark:bg-gray-900 text-2xl font-sans text-md items-center justify-center py-2 min-h-screen">
      <div className="summary-container p-4 w-3/4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-28 border border-1 flex flex-col">
        <div className="summary-details p-2 border-b border-gray-200 text-center">
          <h1 className="text-xl font-bold mb-2 text-center">Quiz Summary</h1>
          <p className="text-sm mb-1 text-black">Total Questions: {totalQuestions}</p>
          <p className="text-sm mb-1 text-green-500">Correct Answers: {score}</p>
          <p className="mb-2 text-lg text-purple-500">Score: {score}</p>
        </div>
        <div className="summary-answers p-2 overflow-y-auto" style={{ maxHeight: '300px' }}>
          <h2 className="text-lg font-bold mb-2 text-center">Detailed Summary</h2>
          {quizData.map((question, index) => (
            <div key={question.id} className="mb-2">
              <p className="text-sm font-bold">{index + 1}. {question.text}</p>
              <p className="text-sm">Your Answer: {question.options[quizState.answers[index]]}</p>
              <p className="text-sm">Correct Answer: {question.options[question.correctAnswer]}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-2">
          <button onClick={handleShare} className="bg-[#1da1f2] text-white text-sm py-1 px-2 rounded-md hover:bg-[#223fe2] transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"/>
            </svg>
            Share
          </button>
          <button onClick={handleRestart} className="restart-button bg-green-600 text-white text-sm py-1 px-2 rounded-md hover:bg-pink-700 transition-colors">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
