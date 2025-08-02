import React, { useState } from 'react';

function Flashcard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard">
      <div className="front">
        <strong>Question:</strong>
        <p>{card.question}</p>
      </div>
      {showAnswer && (
        <div className="back">
          <strong>Answer:</strong>
          <p>{card.answer}</p>
        </div>
      )}
      <button onClick={() => setShowAnswer((v) => !v)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
}

export default Flashcard;
