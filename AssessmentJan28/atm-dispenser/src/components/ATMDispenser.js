import React, { useState, useMemo } from 'react';
import './ATMDispenser.css';

const ATMDispenser = () => {
  const denominations = useMemo(() => [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1].sort((a, b) => b - a), []);
  const [amount, setAmount] = useState('');
  const [results, setResults] = useState([]);
  const [totalNotes, setTotalNotes] = useState(0);


  const calculateDenominations = (amount) => {
    let remainingAmount = parseInt(amount);
    const notesCount = {};
    let total = 0;

    for (let note of denominations) {
      const count = Math.floor(remainingAmount / note);
      if (count > 0) {
        notesCount[note] = count;
        total += count;
        remainingAmount %= note;
      }
    }

    setResults(notesCount);
    setTotalNotes(total);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount greater than zero');
      return;
    }
    calculateDenominations(amount);
  };

  return (
    <div className="atm-container">
      <h1>ATM Currency Dispenser</h1>
      <form onSubmit={handleWithdraw}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to withdraw" min="1"
        />
        <button type="submit">Withdraw</button>
      </form>
      
      {totalNotes > 0 ? (
        <div className="results">
          <h3>Denominations:</h3>
          <ul>
            {Object.keys(results).map(note => (
              <li key={note}>
                {results[note]} notes of Rs {note}
              </li>
            ))}
          </ul>
          <h4>Total notes dispensed: {totalNotes}</h4>
        </div>
      ) : (
        amount && (
          <div className="results">
            <h4>No denominations to display. Please enter a valid amount.</h4>
          </div>
        )
      )}
    </div>
  );
};

export default ATMDispenser;