'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import QuestionComponent from '../components/QuestionComponent';
import Timer from '../components/Timer';
import Navigation from '../components/Navigation';
import ProgressBar from '../components/ProgressBar';
import { quizData } from '../data/quizData';
import { QuizState } from '../types/types';

const Quiz: React.FC = () => {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: new Array(quizData.length).fill(null),
    score: 0,
    timeRemaining: 30,
  });

  const timerSpeed = 1000; // Adjusting speed

  useEffect(() => {
    if (quizState.timeRemaining === 0) {
      handleNext();
    }
  }, [quizState.timeRemaining]);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuizState(prevState => {
        if (prevState.timeRemaining > 0) {
          return { ...prevState, timeRemaining: prevState.timeRemaining - 1 };
        } else {
          clearInterval(timer);
          return prevState;
        }
      });
    }, timerSpeed);

    return () => clearInterval(timer);
  }, [quizState.currentQuestionIndex]);

  const handleSelectAnswer = (answer: number) => {
    setQuizState(prevState => {
      const newAnswers = [...prevState.answers];
      newAnswers[prevState.currentQuestionIndex] = answer;
      const newScore = newAnswers.reduce((score, answer, index) => 
        answer === quizData[index].correctAnswer ? score + 1 : score, 0);
      return { ...prevState, answers: newAnswers, score: newScore };
    });
  };

  const handlePrevious = () => {
    setQuizState(prevState => ({
      ...prevState,
      currentQuestionIndex: prevState.currentQuestionIndex - 1,
      timeRemaining: 30,
    }));
  };

  const handleNext = () => {
    setQuizState(prevState => {
      if (prevState.currentQuestionIndex < quizData.length - 1) {
        return {
          ...prevState,
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
          timeRemaining: 30,
        };
      } else {
        const queryString = new URLSearchParams({ answers: JSON.stringify(prevState.answers) }).toString();
        router.push(`/summary?${queryString}`);
        return prevState;
      }
    });
  };

  if (quizState.currentQuestionIndex >= quizData.length) {
    return null;
  }

  const currentQuestion = quizData[quizState.currentQuestionIndex];

  return (
    <div className="quiz-container  dark:bg-gray-900 text-2xl font-sans text-md flex flex-col items-center justify-center min-h-screen py-2 ">
    <div className=" p-4 max-w-xl mx-auto bg-gray-200 rounded-lg shadow-md mt-12 border border-1 min-w-screen  w-[50%]">
      <ProgressBar
        currentQuestionIndex={quizState.currentQuestionIndex}
        totalQuestions={quizData.length}
        score={quizState.score}
      />
      <QuestionComponent
        question={currentQuestion}
        selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
        onSelectAnswer={handleSelectAnswer}
      />
      <Timer timeRemaining={quizState.timeRemaining} />
      <Navigation
        currentQuestionIndex={quizState.currentQuestionIndex}
        totalQuestions={quizData.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
    </div>
  );
};

export default Quiz;
