import './App.css';
import LeftEye from './components/LeftEye';
import Mouth from './components/Mouth';
import RightEye from './components/RightEye';

function App() {
  return (
    <body>
      <div className="options">

      </div>
      <div className="pumpkin">
        <Mouth />
        <LeftEye />
        <RightEye />
      </div>
    </body>
  );
}

export default App;
