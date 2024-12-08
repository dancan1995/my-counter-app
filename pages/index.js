import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter App</h1>
      <h2>Current Count: {count}</h2>
      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
