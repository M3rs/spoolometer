import './App.scss';

import { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function App() {

  const [spoolSize, setSpoolSize] = useState(parseInt(localStorage.getItem('spoolSize') ?? 1000));
  const [remainder, setRemainder] = useState(parseInt(localStorage.getItem('remainder') ?? 1000));

  const [prints, setPrints] = useState(() => {
    const sp = localStorage.getItem('prints');
    if (!sp || sp === '') {
      return [];
    }

    return JSON.parse(sp);
  });

  const handleSubmid = (e) => {
    e.preventDefault();

    setPrints(p => {
      const np = [
        ...prints, 
        {
          name: e.target.name.value, 
          usage: e.target.usage.valueAsNumber, 
          time: e.target.time.valueAsNumber, 
          start: new Date().toString()
        }
      ];
      localStorage.setItem('prints', JSON.stringify(np));

      return np;
    });


    setRemainder(r => r - e.target.usage.valueAsNumber);
  };

  const resetSpool = (e) => {
    if (!window.confirm("Are you sure you want to reset this?")) {
      return;
    }

    setRemainder(spoolSize);
    setPrints([]);

    localStorage.setItem('remainder', spoolSize);
    localStorage.setItem('spoolSize', spoolSize);
    localStorage.removeItem('prints');

    window.location.reload();
  };

  return (
    <div className="app">
      <h1>Spool-o-meter</h1>
      <div className="spoolSize">
        <label>Spool Size</label>
        <input type="number" onChange={e => setSpoolSize(e.target.valueAsNumber)} value={spoolSize} />
        <button onClick={resetSpool} title="Clears usage and sets max spool to spool size value">Reset</button>
      </div>

      <ReactSpeedometer
         maxValue={spoolSize}
         value={remainder}
         needleColor="black"
         startColor="red"
         segments={10}
         endColor="green"
         height={200}
      />

      <section className="prints">
        <h2>Prints</h2>
        <ul>
          {prints.map(p => { 
            return (
              <li key={p.start}>{p.name}: {p.usage} ({p.time} hours - started {p.start})</li>
            );
          })}
        </ul>
      </section>

      <section className="addPrint">
        <h4>Add New Print</h4>
        <form onSubmit={handleSubmid}>
          <div>
            <label>Name</label>
            <input name="name" />
          </div>
          <div>
            <label>Estimated Usage</label>
            <input type="number" placeholder="0" name="usage" />
          </div>
          <div>
            <label>Estimated Print Time (hours)</label>
            <input type="number" placeholder="0" name="time" />
          </div>
          <button>Add New Print</button>
        </form>
      </section>

    </div>
  );
}

export default App;
