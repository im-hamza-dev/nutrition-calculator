import React, { useState } from "react";
import "./height.component.scss"
 
const Height = () => {

    const [unit, setUnit] = useState('FT');
    const [feet, setFeet] = useState(5);
    const [inches, setInches] = useState(6);
  
    const handleUnitChange = (unit:any) => {
      setUnit(unit);
    };
  
    const handleFeetChange = (e:any) => {
      setFeet(e.target.value);
    };
  
    const handleInchesChange = (e:any) => {
      setInches(e.target.value);
    };
  
    return (
      <div className="height-selector">
        <p className="instruction">Got it. Next question.</p>
        <h2 className="question">How tall are you?</h2>
        <div className="unit-toggle">
          <button
            className={unit === 'FT' ? 'active' : ''}
            onClick={() => handleUnitChange('FT')}
          >
            FT
          </button>
          <button
            className={unit === 'CM' ? 'active' : ''}
            onClick={() => handleUnitChange('CM')}
          >
            CM
          </button>
        </div>
        <div className="input-group">
          <input type="number" value={feet} onChange={handleFeetChange} /> <span>ft</span>
        </div>
        <div className="input-group">
          <input type="number" value={inches} onChange={handleInchesChange} /> <span>in</span>
        </div>
        <p className="valid-range">Valid height is 2'-9'11"</p>
        <button className="next-button">NEXT</button>
      </div>
    );};

export default Height;
