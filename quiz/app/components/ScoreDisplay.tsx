
import React from 'react';

interface Props {
  score: number;
  totalQuestions: number;
}

const ScoreDisplay: React.FC<Props> = ({ score, totalQuestions }) => {
  return <div>Score: {score} / {totalQuestions}</div>;
};

export default ScoreDisplay;