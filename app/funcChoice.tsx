import { useState } from 'react';

export interface Choice {
  id: number;
  value: string;
  description: string;
}
export interface Question {
  id: number;
  value: string;
  description: string;
}

export const funcChoice = () => {

  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, value: '', description: '' },
  ]);

  const [choices, setChoices] = useState<Choice[]>([
    { id: 0, value: '', description: '' },
    { id: 1, value: '', description: '' },
  ]);

  const handleChoiceChange = (id: number, value: string) => {
    setChoices(prevChoices =>
      prevChoices.map(choice =>
        choice.id === id ? { ...choice, description: value } : choice
      )
    );
  };


  const handleQuestionChange = (id: number, value: string) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === id ? { ...question, description: value } : question
      )
    );
  };


  const addChoice = () => {
    const newChoice = { id: choices.length + 1, value: '', description: '' };
    setChoices([...choices, newChoice]);
  };

  const addQuestion = () => {
    const newQuestion = { id: questions.length + 1, value: '', description: '' };
    setQuestions([...questions, newQuestion]);
  };


  const removeChoice = (id: number) => {
    setChoices(prevChoices => prevChoices.filter(choice => choice.id !== id));
  };


  const removeQuestion = (id: number) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.filter(question => question.id !== id);
      return updatedQuestions.map((question, index) => ({ ...question, id: index + 1 }));
    });
  };

  const duplicateQuestion = (id: number) => {
    const questionDuplicate = questions.find(question => question.id === id);
    if (questionDuplicate) {
      const newQuestion = { ...questionDuplicate, id: questions.length + 1 };
      setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    }
  };

  return { choices, questions, handleChoiceChange, handleQuestionChange, addChoice, removeChoice, addQuestion, removeQuestion, duplicateQuestion };
};
