import React from 'react';
import { Route }  from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" components={RedPage} />
      <Route path="/blue" components={BluePage} />
    </div>
  );
}

export default App;
