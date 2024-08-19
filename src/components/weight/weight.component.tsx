import React, { useState } from 'react';
import './weight.component.scss';

const Weight = () => {
  const [unit, setUnit] = useState('KG');
  const [weight, setWeight] = useState(75);

  const handleUnitChange = (unit:any) => {
    setUnit(unit);
  };

  const handleWeightChange = (e:any) => {
    setWeight(e.target.value);
  };

  return (
    <div className="weight-selector">
      <p className="instruction">Great. Last question in the section.</p>
      <h2 className="question">How much do you weigh right now?</h2>
      <div className="input-group">
        <input type="number" value={weight} onChange={handleWeightChange} />
        <div className="unit-toggle">
          <button
            className={unit === 'LBS' ? 'active' : ''}
            onClick={() => handleUnitChange('LBS')}
          >
            LBS
          </button>
          <button
            className={unit === 'KG' ? 'active' : ''}
            onClick={() => handleUnitChange('KG')}
          >
            KG
          </button>
        </div>
      </div>
      <p className="valid-range">Valid weight is 23-227 kg</p>
      <button className="next-button">NEXT</button>
    </div>
  );
};

export default Weight;
