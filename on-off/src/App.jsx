import { useState } from 'react';
import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLamp = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="container" style={{ backgroundColor: isOn ? 'white' : 'black' }}>
      <img
        className="lamp"
        src={
          isOn
            ? 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png'
            : 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png'
        }
        alt="Lamp"
        onClick={toggleLamp}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default App;
