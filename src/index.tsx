import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

document.body.innerHTML = '<div id="app"></div>';

const App = () => {
    console.log('test11');

    return <div>test1sss2ddedsss3</div>;
}

const root  = createRoot(document.getElementById('app'));
root.render(<App />);
