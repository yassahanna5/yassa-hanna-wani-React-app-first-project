import React, { useState } from 'react';

export default function About() {
  const [random, setRandom] = useState(0);

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page.</p>
      <button onClick={() => setRandom(Math.round(Math.random() * 100))}>
        count random num {random}
      </button>
    </div>
  );
}
