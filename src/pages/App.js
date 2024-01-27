import { useRef, useState } from 'react';
import LuckRoll from '../components/luckRoll';
import { CANDIDATES } from '../constants/data';
import { generateRandomWithMax, removeElementAtIndex, getIndexByElement } from '../utils/fakeRandom';
import cloud from '../assets/cloud.png';
import cloud1 from '../assets/cloud1.png';
import logo from '../assets/rockids-logo.png';
import rockIcon from '../assets/rock.png';
import cats from '../assets/two-cat.png';
import rocket from '../assets/rocket.png';
import './App.css';

function App() {
  const [pool, setPool] = useState(CANDIDATES);
  const rollRef = useRef(null);
  const onStartClick = () => {
      const randomNumber = generateRandomWithMax(pool.length);
      const valueInPool = pool[randomNumber];
      const originIndexOfCandidates = getIndexByElement(CANDIDATES, valueInPool);
      
      rollRef.current.start(originIndexOfCandidates, () => {
        const newPool = removeElementAtIndex(pool, randomNumber);
        setPool(newPool);
      });
  }

  return (
    <div className="home-page">
      <img src={logo} className="logo" alt="logo" />
      <div className='lottery-container'>
        <span className="info">还剩 {pool.length} 位幸运选手</span>
        <LuckRoll list={CANDIDATES} ref={rollRef} />
        <img src={rockIcon} className="rock-btn" onClick={onStartClick} alt="start button" />
        <img src={cats} className="cats" alt="cats" />
      </div>
      
      <img src={cloud} className="cloud cloud1" alt="cloud" />
      <img src={cloud} className="cloud cloud2" alt="cloud" />
      <img src={cloud1} className="cloud cloud3" alt="cloud" />
      <img src={cloud} className="cloud cloud4" alt="cloud" />
      <img src={rocket} className="rocket" alt="rocket" />
    </div>
  );
}

export default App;
