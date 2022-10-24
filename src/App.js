import './App.css';
import LeftEye from './components/LeftEye';
import Mouth from './components/Mouth';
import RightEye from './components/RightEye';

function App() {
  return (
    <main>
      <div className="options">

      </div>
      <div className="pumpkin">
        <Mouth />
        <LeftEye />
        <RightEye />
      </div>
    </main>
  );
}

export default App;
