import React from 'react';
import './App.css';

import Game from './components/Game';
import Score from './components/Score';
import Gems from './components/Gems';
import HighScore from './components/HighScore';

import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Balloon inflation</h1>
        <React.Suspense fallback={<div>Loaging...</div> }>
          <HighScore />
        </React.Suspense>
        <Score />
        <Game />
        <Gems />

      </div>
    </RecoilRoot>
  );
}

export default App;
