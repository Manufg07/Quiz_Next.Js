import React from 'react';

interface Props {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<Props> = ({ currentQuestionIndex, totalQuestions, onPrevious, onNext }) => {
  return (
    <div className=''>
    <div className="navigation flex justify-between mt-4">
      <button 
        className="B1 bg-yellow-500 w-[48%] p-2 rounded-md cursor-pointer text-center"
        onClick={onPrevious} 
        disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button 
        className="B1 bg-yellow-500 w-[48%] p-2 rounded-md cursor-pointer text-center"
        onClick={onNext} 
        disabled={currentQuestionIndex >= totalQuestions}>
        {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
    </div>
  );
};

export default Navigation;
