import React from 'react';
import { Question } from '../types/types';

interface QuestionComponentProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="question-component mb-4">
      <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
      <div className="options flex flex-col">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button py-2 px-4 my-1 border-2 rounded-md transition-all ${
              selectedAnswer === index ? 'bg-teal-600 text-white' : 'bg-white border-blue-700'
            }`}
            onClick={() => selectedAnswer === null && onSelectAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionComponent;
