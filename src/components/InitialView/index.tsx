import React, { useEffect, useState } from 'react';
import { FaDev } from 'react-icons/fa';
import './styles.css';
import { pronouns } from '../../utils/data/pronouns';

const App: React.FC = () => {
  const [actualText, setActualText] = useState(pronouns[0]);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    let count = 1;

    const timer = setInterval(() => {
      if (count <= pronouns.length) {
        const actualValue = pronouns[count];

        setActualText((localValue) => (localValue = actualValue));
        setIsIn((value) => !value);

        count++;
      } else {
        count = 0;
      }
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="content">
        <i>
          <FaDev className="dev" />
        </i>
        <h2>Bernardo Aguayo</h2>
        <div className="base">
          <p className={`base ${isIn ? 'in' : 'out'}`}>{actualText}</p>
        </div>
        <button>button</button>
      </div>
    </div>
  );
};
export default App;
