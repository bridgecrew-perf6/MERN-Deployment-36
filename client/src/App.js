
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ShowForm from './views/ShowForm';
import ShowAll from './views/ShowAll';
import ShowPet from './views/ShowPet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <ShowAll />
        </Route>
        <Route exact path="/pet/create">
          <ShowForm />
        </Route>
        <Route exact path="/pet/edit/:id">
          <EditPet />
        </Route>
        <Route exact path="/pet/one/:id">
          <ShowPet />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
