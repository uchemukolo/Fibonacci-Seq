import React, { useState } from 'react';
import './App.css';

function FibonacciSequence() {
  const [numTerm, setNumTerm] = useState(5);
  const [fibonacciSeq, setFibonacciSeq] = useState([]);

  const generateFibonacci = (n) => {
    const sequence = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        sequence.push(0);
      } else if (i === 1) {
        sequence.push(1);
      } else sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };

  const handleGenerateSeq = () => {
    const seq = generateFibonacci(numTerm);
    setFibonacciSeq(seq);
  };

  return (
    <div className="container">
      <input
        type="number"
        value={numTerm}
        onChange={(e) => setNumTerm(e.target.value)}
      />
      <button onClick={handleGenerateSeq}>Generate</button>
      <ul>
        {fibonacciSeq.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
    </div>
  );
}

export default FibonacciSequence;
