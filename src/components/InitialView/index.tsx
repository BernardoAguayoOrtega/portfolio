import React, { useEffect, useState } from 'react';
import { FaDev } from 'react-icons/fa';
import './styles.css';
import { pronouns } from '../../utils/data/pronouns';

const InitialView: React.FC = () => {
  const [actualText, setActualText] = useState(pronouns[0]);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    let count = 1;

    const timer = setInterval(() => {
      if (count === pronouns.length + 1) {
        count = 0;
      } else if (count <= pronouns.length) {
        const actualValue = pronouns[count];

        setActualText((localValue) => (localValue = actualValue));
        setIsIn((value) => !value);

        count++;
      }
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container" data-testid="initialView">
      <div className="content" data-testids="content">
        <i>
          <FaDev id="dev" />
        </i>
        <h2>Bernardo Aguayo</h2>
        <div className="base">
          <p className={`base ${isIn ? 'in' : 'focus'}`}>{actualText}</p>
        </div>
        <button>button</button>
      </div>
    </div>
  );
};
export default InitialView;
