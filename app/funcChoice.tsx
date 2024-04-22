import { useState } from 'react';
export interface Choice {
  id: number;
  value: string;
  description: string;
  error: boolean;
  selected: boolean;
}
export interface Question {
  id: number;
  value: string;
  description: string;
  error: boolean;
  choices: Choice[];
}
export interface Name {
  value: string;
  error: boolean;
}

export const funcChoice = () => {
  const [name, setName] = useState<Name>({ value: '', error: false });

  const handleNameChange = (value: string) => {
    setName({ value: value, error: false });
  };

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      value: '',
      description: '',
      error: false,
      choices: [
        { id: 1, value: '', description: '', error: false, selected: false },
        { id: 2, value: '', description: '', error: false, selected: false }
      ]
    },
  ]);

  const handleChoiceChange = (questionId: number, choiceId: number, description: string, selected: boolean) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId
          ? {
            ...question,
            choices: question.choices.map(choice => ({
              ...choice,
              selected: choice.id === choiceId ? selected : false,
              description: choice.id === choiceId ? description : choice.description
            }))
          }
          : question
      )
    );
  };

  const addChoice = (questionId: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId
          ? {
            ...question,
            choices: [
              ...question.choices,
              { id: question.choices.length + 1, value: '', description: '', error: false, selected: false }
            ]
          }
          : question
      )
    );
  };

  const removeChoice = (questionId: number, choiceId: number) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(question =>
        question.id === questionId
          ? {
            ...question,
            choices: question.choices.filter(choice => choice.id !== choiceId)
          }
          : question
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

  const Save = () => {
    const updatedQuestions = questions.map(question => {
      let questionError = question.description.trim() === '';
      const updatedChoices = question.choices.map(choice => {
        const choiceError = choice.description.trim() === '';
        return { ...choice, error: choiceError };
      });
      if (questionError) {
        question.error = true;
      } else {
        question.error = false;
      }
      return { ...question, choices: updatedChoices };
    });
    setQuestions(updatedQuestions);

    const nameError = name.value.trim() === '';
    if (nameError) {
      setName(prevName => ({ ...prevName, error: true }));
    } else {
      setName(prevName => ({ ...prevName, error: false }));
    }
  };

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      value: '',
      description: '',
      error: false,
      choices: [
        { id: 1, value: '', description: '', error: false, selected: false },
        { id: 2, value: '', description: '', error: false, selected: false }
      ]
    };
    setQuestions([...questions, newQuestion]);
  };

  const duplicateQuestion = (id: number) => {
    const questionDuplicate = questions.find(question => question.id === id);
    if (questionDuplicate) {
      const newQuestion = {
        ...questionDuplicate,
        id: questions.length + 1,
        choices: questionDuplicate.choices.map(choice => ({ ...choice, selected: choice.selected }))
      };
      setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    }
  };



  const removeQuestion = (id: number) => {
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.filter(question => question.id !== id);
      return updatedQuestions.map((question, index) => ({ ...question, id: index + 1 }));
    });
  };

  const resetCancle = () => {
    setName({ value: '', error: false });
    setQuestions([
      {
        id: 1,
        value: '',
        description: '',
        error: false,
        choices: [
          { id: 1, value: '', description: '', error: false, selected: false },
          { id: 2, value: '', description: '', error: false, selected: false }
        ]
      }
    ]);
  };

  return {
    questions,
    name,
    handleChoiceChange,
    handleQuestionChange,
    handleNameChange,
    addChoice,
    removeChoice,
    addQuestion,
    removeQuestion,
    duplicateQuestion,
    Save,
    resetCancle

  };
};