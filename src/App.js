import Counter from './components/Counter';
import Title from './components/Title';
import Input from './components/Input';
import './index.css';
import { useState } from 'react';
import BonusCounter from './components/BonusCounter';

function App() {
  const [minNum, setMinNum] = useState(Number.MIN_SAFE_INTEGER);
  const [maxNum, setMaxNum] = useState(Number.MAX_SAFE_INTEGER);
  const [initial, setInitial] = useState(0);
  const [steps, setSteps] = useState(1);
  let configurations = {minNum, maxNum, initial, steps};
  return (
    <div>
      <Title text="useState Homeworks 31/10/22"/>
      <Counter configurations={configurations}/>
      <div className='inputs-container'>
        <Input setMinNum={setMinNum} setMaxNum={setMaxNum} setInitial={setInitial} setSteps={setSteps} configurations={configurations}/>
        <BonusCounter configurations={configurations}/>
      </div>
    </div>
  );
}

export default App;
