import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelpForm from './components/HelpForm/HelpForm';
import HelpList from './components/HelpList/HelpList';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <br/>
      <h1>
        HelpTrack
      </h1>
      <br/>
      <Card>
        
        <Card.Body>
          <HelpForm/>
        </Card.Body>
      </Card>
      <br/>
      <HelpList/>
    </div>
  );
}

export default App;
