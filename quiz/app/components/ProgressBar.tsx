import React from 'react';

interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestionIndex, totalQuestions, score }) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full h-6 bg-gray-300 rounded-lg relative mb-4">
      <div
        className="h-full bg-blue-700 rounded-lg transition-width duration-300"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute inset-0 flex justify-center items-center text-white text-sm">
        Question {currentQuestionIndex + 1} of {totalQuestions} | Score: {score}
      </div>
    </div>
  );
};

export default ProgressBar;
