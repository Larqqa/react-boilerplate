import React, { useState } from 'react';

export const App = (props) => {
    
    const [ clicks, setClicks ] = useState(0);
    
    const clicker = () => {
        setClicks(clicks + 1);
    };

    return (
        <div className="main">
            <h1>Hello world!</h1>
            <p>{clicks}</p>
            <button onClick={clicker}>click me</button>
        </div>
    );
};

export default App;
