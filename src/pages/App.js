import { useRef, useState } from 'react';
import LuckRoll from '../components/luckRoll';
import { CANDIDATES } from '../constants/data';
import './App.css';
import { generateRandomWithMax } from '../utils/fakeRandom';

function App() {
  const [data, setData] = useState(CANDIDATES);
  const rollRef = useRef(null);
  const onStartClick = () => {
      const luckyNumber = generateRandomWithMax(data.length);
      rollRef.current.start([luckyNumber]);
  }

  return (
    <div className="App">
      <LuckRoll cols={[1]} list={data} ref={rollRef} />
      <button onClick={onStartClick}>Click</button>
    </div>
  );
}

export default App;
