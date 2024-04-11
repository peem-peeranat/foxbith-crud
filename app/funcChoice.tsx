import { useState } from 'react';

export interface Choice {
  id: number;
  value: string;
  description: string;
}

export const funcChoice = () => {
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

  const addChoice = () => {
    const newChoice = { id: choices.length + 1, value: '', description: '' };
    setChoices([...choices, newChoice]);
  };

  const removeChoice = (id: number) => {
    setChoices(prevChoices => prevChoices.filter(choice => choice.id !== id));
  };

  return { choices, handleChoiceChange, addChoice, removeChoice };
};
