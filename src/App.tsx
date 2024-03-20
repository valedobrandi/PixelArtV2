import { useState } from 'react';
import './App.css'
import Board from './components/Board/index.tsx';
import PaintBoard from './components/PaintBoard/index.tsx';

import PaintPicture from './components/PaintPicture/index.tsx';





function App() {

  const [selectPics, setSelectPics] = useState('miraculous.jpg')

  return (
    <Board>
    <PaintBoard setSelectPics={setSelectPics}>
    <PaintPicture selectPics={selectPics}/>
    </PaintBoard>
    </Board>
  )
}

export default App
