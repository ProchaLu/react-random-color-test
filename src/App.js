import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  // Create a state for the button
  const [hexCode, setHexCode] = useState(color);
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const param = {
    hue: hue,
    luminosity: lum,
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: 'black',
          color: hexCode,
          textAlign: 'center',
        }}
      >
        Random Color Generator
      </h1>
      <input
        style={{
          border: '2px solid #ccc',
          borderRadius: '10%',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          color: '#333',
          boxSizing: 'border-box',
          marginLeft: '12px',
        }}
        value={hue}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
      />
      <div style={{ marginLeft: '12px' }}>Enter a hue here.</div>
      <input
        style={{
          border: '2px solid #ccc',
          borderRadius: '10%',
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          color: '#333',
          boxSizing: 'border-box',
          marginLeft: '12px',
          marginTop: '20px',
        }}
        value={lum}
        onChange={(event) => setLum(event.currentTarget.value)}
      />
      <div style={{ marginLeft: '12px' }}>Enter a luminosity here.</div>
      <button
        style={{
          border: '2px solid #ccc',
          borderRadius: '50%',
          padding: '20px',
          width: '150px',
          height: '150px',
          fontSize: '16px',
          backgroundColor: '#f0f0f0',
          boxSizing: 'border-box',
          marginTop: '12px',
          marginLeft: '20px',
          color: hexCode,
        }}
        onClick={() => {
          const newColor = randomColor(param);
          setHexCode(newColor);
        }}
      >
        Generate
      </button>

      <div
        style={{
          backgroundColor: hexCode,
          border: '2px dotted black',
          borderRadius: '3rem',
          textAlign: 'center',
          fontSize: '30px',
          margin: '10px',
          padding: '200px',
        }}
      >
        Generated Color:
        {hexCode}
      </div>
    </>
  );
}
