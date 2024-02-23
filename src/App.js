import React from 'react';
import "./App.css"
import {action, originals} from './urls'
import NavBar from './Component/NavBar/NavBar'
import Banner from './Component/Banner/Banner';
import RowPost from './Component/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={action} title='Comedy' isSmall />

    </div>
  );
}

export default App;
