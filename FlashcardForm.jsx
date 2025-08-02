import React, { useState } from 'react';

function FlashcardForm({ onSubmit, initial, onCancel }) {
  const [question, setQuestion] = useState(initial.question);
  const [answer, setAnswer] = useState(initial.answer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && answer.trim()) {
      onSubmit({ question, answer });
    }
  };

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <label>
        Question:
        <input value={question} onChange={e => setQuestion(e.target.value)} required />
      </label>
      <label>
        Answer:
        <input value={answer} onChange={e => setAnswer(e.target.value)} required />
      </label>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default FlashcardForm;
