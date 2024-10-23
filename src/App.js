import React, { useState } from 'react';
import Profile from './Profile';
import CustomTextField from './CustomTextField';
import './styles.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Profile name="Lin Lanying" age={25} />
      <CustomTextField label="Name:" value={text} onChange={handleTextChange} />
      <p>Eingegebener Text: {text}</p>
    </div>
  );
}

export default App;

