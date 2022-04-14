
import './App.css';
import { RolloutStrategy } from './components/RolloutStrategy';
import { StandardStrategy } from './components/StandardStrategy';

function App() {
  return (
    <div className="container d-flex flex-column align-items-center py-5">
      {/* <StandardStrategy /> */}
      <RolloutStrategy />
    </div>
  );
}

export default App;
