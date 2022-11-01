import Counter from './components/Counter';
import Title from './components/Title';
import Input from './components/Input';
import './index.css';
import { useState } from 'react';
import NewCounter from './components/NewCounter';

function App() {
  const [minNum, setMinNum] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const [initial, setInitial] = useState("");
  const [steps, setSteps] = useState("");
  let configurations = {minNum, maxNum, initial, steps};
  return (
    <div>
      <Title text="Homeworks"/>
      {/* <Counter configurations={configurations}/> */}
      <div className='inputs-container'>
        <Input setMinNum={setMinNum} setMaxNum={setMaxNum} setInitial={setInitial} setSteps={setSteps} configurations={configurations}/>
        <NewCounter configurations={configurations}/>
      </div>
    </div>
  );
}

export default App;
