import Banner from './components/Banner/Banner';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label="Name:" placeholder="Enter player name" />
      <InputText label="Position:" placeholder="Enter player position" />
      <InputText label="Image:" placeholder="Enter a URL player image" />
    </div>
  );
}

export default App;
