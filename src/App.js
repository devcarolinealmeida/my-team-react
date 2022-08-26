import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';


function App() {

  const [players, setPlayer] = useState([])

  const addPlayer = (player) => {
    setPlayer([...players, player])
    console.log(player)
  }

  return (
    <div className="App">
      <Banner />
      <Form handlePlayer={player => addPlayer(player)}/>
    </div>
  );
}

export default App;
