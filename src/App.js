
import './App.css';
import Header from './Components/Headers/Header';
import GymActivities from './Components/GymActivities/GymActivities';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App bg-lime-100">
      <Header></Header>
      <GymActivities></GymActivities>
      <Footer></Footer>
    </div>
  );
}

export default App;
