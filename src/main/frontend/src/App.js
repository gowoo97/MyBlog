import './App.css';
import LoginTemplate from './LoginTemplate';
import { Route, Routes} from 'react-router-dom';
import Registeration from './Registeration';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <LoginTemplate /> }/>
      <Route path="/registeration" element={ <Registeration/>} />
    </Routes>
  );
}

export default App;
