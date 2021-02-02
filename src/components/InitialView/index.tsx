import React from 'react';
import { FaDev } from 'react-icons/fa';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <i>
          <FaDev className="dev" />
        </i>
        <h2>Bernardo Aguayo</h2>
        <p>changing text</p>
        <button>button</button>
      </div>
    </div>
  );
};
export default App;
