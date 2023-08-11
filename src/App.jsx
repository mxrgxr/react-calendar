import Calendar from './Calendar';
import ColorSelector from './ColorSelector';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorMap, setColorMap] = useState({});
  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

    // The following creates an array of numbers from [1..28]
    const dates = Array.from({length: 28}, (x, i) => i + 1)

    return (
      <div className="App">
        <h1>React Calendar</h1>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Calendar
          days={days}
          dates={dates}
          colorMap={colorMap}
          setColorMap={setColorMap}
          selectedColor={selectedColor}
        />
      </div>
    );  
  }