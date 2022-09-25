import React, {useState} from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import CreateEvent from './components/CreateEvent/CreateEvent';


function App() {
  const [state, setState] = useState('landing');

  return (
    <div className="App">
      {state === 'landing' && (
        <Landing navigateToCreate={() => setState('create') } />
        )}
      {state === 'create' && <CreateEvent />}
    </div>
  );
}

export default App;
