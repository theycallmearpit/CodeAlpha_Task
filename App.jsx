import React, { useState } from 'react';
import Flashcard from './Flashcard';
import FlashcardForm from './FlashcardForm';

function App() {
  const [flashcards, setFlashcards] = useState([
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
  ]);
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const nextCard = () => setCurrent((prev) => (prev + 1) % flashcards.length);
  const prevCard = () => setCurrent((prev) => (prev - 1 + flashcards.length) % flashcards.length);

  const addFlashcard = (card) => {
    setFlashcards([...flashcards, card]);
    setCurrent(flashcards.length);
    setShowForm(false);
  };

  const editFlashcard = (card) => {
    const updated = [...flashcards];
    updated[editIndex] = card;
    setFlashcards(updated);
    setEditIndex(null);
    setShowForm(false);
  };

  const deleteFlashcard = (index) => {
    const updated = flashcards.filter((_, i) => i !== index);
    setFlashcards(updated);
    setCurrent(Math.max(0, current - (index <= current ? 1 : 0)));
  };

  return (
    <div className="container">
      <h1>Flashcard Quiz App</h1>
      {showForm ? (
        <FlashcardForm
          onSubmit={editIndex !== null ? editFlashcard : addFlashcard}
          initial={editIndex !== null ? flashcards[editIndex] : { question: '', answer: '' }}
          onCancel={() => { setShowForm(false); setEditIndex(null); }}
        />
      ) : (
        <>
          {flashcards.length > 0 ? (
            <Flashcard card={flashcards[current]} />
          ) : (
            <p>No flashcards yet.</p>
          )}
          <div className="controls">
            <button onClick={prevCard} disabled={flashcards.length === 0}>Previous</button>
            <button onClick={nextCard} disabled={flashcards.length === 0}>Next</button>
          </div>
          <div className="actions">
            <button onClick={() => setShowForm(true)}>Add</button>
            <button onClick={() => { setEditIndex(current); setShowForm(true); }} disabled={flashcards.length === 0}>Edit</button>
            <button onClick={() => deleteFlashcard(current)} disabled={flashcards.length === 0}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
