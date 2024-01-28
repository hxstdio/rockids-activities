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

const ORIGIN_CANDIDATES = ["准备好了吗？Let's Rock!", ...CANDIDATES];

function App() {
  const [originData, setOriginData] = useState(ORIGIN_CANDIDATES);
  const [pool, setPool] = useState(ORIGIN_CANDIDATES);
  const [isEdit, setEdit] = useState(false);
  const rollRef = useRef(null);
  const editRef = useRef(null);
  const onStartClick = () => {
      let randomNumber = generateRandomWithMax(pool.length);

      // skip the first element, as it's not a candidate but a slogan 
      if (randomNumber === 0) {
        randomNumber = randomNumber + 1;
      }

      const valueInPool = pool[randomNumber];
      const originIndexOfCandidates = getIndexByElement(originData, valueInPool);
      
      rollRef.current.start(originIndexOfCandidates, () => {
        const newPool = removeElementAtIndex(pool, randomNumber);
        setPool(newPool);
      });
  }

  const onEditClick = () => {
    setEdit(true);
  }

  const onEditConfirm = () => {
    const newValue = editRef.current.value || '';
    const newData = newValue.split('\n');
    setOriginData(newData);
    setPool(newData);
    setEdit(false);
  }

  return (
    <div className="home-page">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" onClick={onEditClick} />
      </div>
      <div className='lottery-container'>
        <LuckRoll list={originData} ref={rollRef} />
        <img src={rockIcon} className="rock-btn" onClick={onStartClick} alt="start button" />
        <img src={cats} className="cats" alt="cats" />
      </div>

      {
        isEdit ? (
          <div className='edit-container'>
              <textarea ref={editRef} defaultValue={originData.join('\n')} className='text-area' rows="30">
              </textarea>
              <button className='confirm' onClick={onEditConfirm}>OK</button>
          </div>
        ) : null
      }
      
      <img src={cloud} className="cloud cloud1" alt="cloud" />
      <img src={cloud} className="cloud cloud2" alt="cloud" />
      <img src={cloud1} className="cloud cloud3" alt="cloud" />
      <img src={cloud} className="cloud cloud4" alt="cloud" />
      <img src={rocket} className="rocket" alt="rocket" />
      <p className="info">还剩 {pool.length - 1} 位幸运选手</p>
    </div>
  );
}

export default App;
