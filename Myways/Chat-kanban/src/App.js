import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom';

import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import KanbanBoard from './components/Kanban/Board';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <div>
        
      </div>
      <Switch>
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/kanban" component={KanbanBoard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        
      </Switch>
    </Router>
  );
}

export default App;
