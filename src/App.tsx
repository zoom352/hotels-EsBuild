import React, {useState} from 'react';
import './index.css'
// @ts-ignore
import Logo from './Logo.png'

const App = () => {
    const [state, setState] = useState<number>(0)

    const changeCount = (): void => {
        setState(state + 1)
    }

    return (
        <div>
            <h1>count {state}</h1>
            <img src={Logo} width={105}/>
            <button onClick={changeCount}>click me</button>
        </div>
    );
};

export default App;