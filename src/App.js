import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import MyTeam from './components/MyTeam/MyTeam';


function App() {

  const [players, setPlayer] = useState([])

  const positions = [
    {
      name: 'Goalkeeper',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Defense',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      name: 'Midfielders',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      name: 'Offense',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    },
  ]

  const addPlayer = (player) => {
    setPlayer([...players, player])
    console.log(player)
  }

  return (
    <div className="App">
      <Banner />
      <Form positions={positions.map(position => position.name)} handlePlayer={player => addPlayer(player)}/>
      {positions.map(position => <MyTeam key={position.name} positionName={position.name} firstColor={position.firstColor} secondColor={position.secondColor}/>)}
    </div>
  );
}

export default App;
