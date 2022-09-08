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
      name: 'Virgil van Dijk',
      team: 'Liverpool',
      image: 'https://s.yimg.com/uu/api/res/1.2/Z0gZRbBj68oBSq1F1jVDig--~B/aD0xNjAwO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/the_independent_635/cd6c3b42a3e5e41198d8f9ffef7eb009',
      position: 'Defense'
    },
    {
      name: 'Sergio Ramos',
      team: 'Paris Saint-Germain',
      image: 'https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2022/01/16/Mobile_UK_L1_2122_Ramos_Paris.jpg?h=728&la=en&w=518&hash=4094551C98CB4CD5FB5C7428C884F6B8',
      position: 'Defense'
    },
    {
      name: 'Marquinhos',
      team: 'Paris Saint-Germain',
      image: 'https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/82/57282.jpg',
      position: 'Defense'
    },
    {
      name: 'Paul Pogba',
      team: 'Juventus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-6Wr6JLA2kNbcWBFedNaKqxcA0yZNs5ccA&usqp=CAU',
      position: 'Midfielders'
    },
    {
      name: 'Kevin De Bruyne',
      team: 'Manchester City',
      image: 'https://pbs.twimg.com/media/FNMacQuWUAA6IUy.jpg',
      position: 'Midfielders'
    },
    {
      name: 'Marcelo',
      team: 'Real Madrid',
      image: 'https://www.realmadrid.com/img/vertical_380px/marcelo_ficha_550x650_2_20220614011044.jpg',
      position: 'Midfielders'
    },
    {
      name: 'Jorginho',
      team: 'Chelsea',
      image: 'https://pbs.twimg.com/media/FDwM4M1WEAEHyq3.jpg',
      position: 'Midfielders'
    },
    {
      name: 'Neymar Jr',
      team: 'Paris Saint-Germain',
      image: 'https://i.pinimg.com/736x/f2/22/2c/f2222ccb7e81f8c47028fa1e0074a94c.jpg',
      position: 'Offense'
    },
    {
      name: 'Mohamed Salah',
      team: 'Liverpool',
      image: 'https://i2-prod.football.london/incoming/article24117243.ece/ALTERNATES/s1200c/0_Chelsea-are-amongst-a-trio-who-could-sign-Mohamed-Salah-as-Premier-League-wish-known.jpg',
      position: 'Offense'
    },
    {
      name: 'Lionel Messi',
      team: 'Paris Saint-Germain',
      image: 'https://64.media.tumblr.com/19c0dc8d1296f1c52f338ec65032064a/eaf24f3151b015b4-7e/s540x810/b0ea06154166a96c415fabb8c298ddea0bca1590.png',
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

  function deletePlayer(name) {
    setPlayer(players.filter(player => player.name !== name))
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
