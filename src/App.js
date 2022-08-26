import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import MyTeam from './components/MyTeam/MyTeam';


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
      <MyTeam positionNome={"Goalkeepers"}/>
      <MyTeam positionNome={"Defense"}/>
      <MyTeam positionNome={"Midfielders"}/>
      <MyTeam positionNome={"Offense"}/>
    </div>
  );
}

export default App;
