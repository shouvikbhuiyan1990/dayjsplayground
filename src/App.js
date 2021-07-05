import dayjs from 'dayjs';
import { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState('2021-12-15T00:00:00Z');
  const [format, setFormat] = useState('DD/MM/YYYY hh:mm a');
  const dateSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Dayjs Playground</h1>
      <form className='input-container' onSubmit={dateSubmit}>
        <input
          type="text"
          name="date"
          placeholder="Date in ISO string Format"
          required
          title="Enter a valid ISO string"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          name="format"
          placeholder="Readable format e.g. MM/DD/YYYY"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        />
      </form>
      <section>
        <h2>Readable Date</h2>
        <h3>{dayjs(date).format(format)}</h3>
      </section>
    </div>
  );
}

export default App;
