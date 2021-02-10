import React from 'react';
import InitialView from '../InitialView/index';
import './styles.css';

const App: React.FC = () => {
  return (
    <main className="container">
      <InitialView data-testid="initialView" />
    </main>
  );
};
export default App;
