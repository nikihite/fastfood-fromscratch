import { useState } from 'react';

export default function InstructionForm({ setExtraInstructions, extraInstructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setExtraInstructions([...extraInstructions, instructionInForm]);

    setInstructionInForm('');
  }

  function handleInstructionChange(e) {
    setInstructionInForm(e.target.value);
  }

  return <form onSubmit={handleSubmit}>
    <label>
          New Instruction
      <input required value={instructionInForm} onChange={handleInstructionChange} />
    </label>
    <button> Add Instruction</button>
  </form>;
}