import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import MyTeam from './components/MyTeam/MyTeam';


function App() {

  const [players, setPlayer] = useState([
    {
      name: 'Thibaut-Courtois',
      team: 'Real Madrid',
      image: 'https://biraon.com/wp-content/uploads/2022/05/Goleiro-Gigante-Thibaut-Courtois.jpg',
      position: 'Goalkeeper'
    },
    {
      name: 'Neymar Jr',
      team: 'PSG',
      image: 'https://i.pinimg.com/736x/f2/22/2c/f2222ccb7e81f8c47028fa1e0074a94c.jpg',
      position: 'Offense'
    }
  ])

  const positions = [
    {
      name: 'Goalkeeper',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Defense',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Midfielders',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Offense',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF',
    },
  ]

  const addPlayer = (player) => {
    setPlayer([...players, player])
  }

  function deletePlayer() {
    console.log("deletando jogador")
  }

  return (
    <div className="App">
      <Banner />
      <Form positions={positions.map(position => position.name)} handlePlayer={player => addPlayer(player)}/>
      
      {positions.map(position => 
      <MyTeam 
      key={position.name} 
      positionName={position.name} 
      firstColor={position.firstColor} 
      secondColor={position.secondColor}
      players={players.filter(player => player.position === position.name)}
      toDelete={deletePlayer}
      />)}
      <Footer />
    </div>
  );
}

export default App;
