import { useRef, useState } from 'react';
import LuckRoll from '../components/luckRoll';
import { CANDIDATES } from '../constants/data';
import { generateRandomWithMax } from '../utils/fakeRandom';
import cloud from '../assets/cloud.png';
import cloud1 from '../assets/cloud1.png';
import './App.css';

function App() {
  const [data, setData] = useState(CANDIDATES);
  const rollRef = useRef(null);
  const onStartClick = () => {
      const luckyNumber = generateRandomWithMax(data.length);
      rollRef.current.start([luckyNumber]);
  }

  return (
    <div className="home-page">
    
      <div className='lottery-container'>
        <LuckRoll startHandler={onStartClick} width="80%" cols={[1]} list={data} ref={rollRef} />
      </div>
      
      <img src={cloud} className="cloud cloud1" alt="cloud" />
      <img src={cloud} className="cloud cloud2" alt="cloud" />
      <img src={cloud1} className="cloud cloud3" alt="cloud" />
      <img src={cloud} className="cloud cloud4" alt="cloud" />
    </div>
  );
}

export default App;
