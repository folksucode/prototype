import React, { useEffect, useState } from 'react';

import './Expreince.css'
import Button from '@mui/material/Button';
import ExpreinceForm from './ExpreinceForm';
import ExpreinceItem from './ExpreinceItem';

function Expreince() {

  const [expreinces, setExpreinces] = useState([]);
  const [showInputs, setShowInputs] = useState(false);

  const handleAddExpreince = () => {
    setShowInputs(true);
  };

  const handleSaveExpreince = (newExpreince) => {
    setExpreinces([...expreinces, newExpreince]);
    setShowInputs(false);
  };

  const handleCancel = () => {
    setShowInputs(false);
};

  const handleRemoveExpreince = (index) => {
    const updatedExpreinces = expreinces.filter((_, i) => i !== index);
    setExpreinces(updatedExpreinces);
  };
  return (
    <div className='exp-card'>
      <a>EXPREINCE INFORMATION</a>

      <div className='btn-exp'>
        <Button variant="outlined" onClick={handleAddExpreince}>ADD EXPREINCE</Button>
        {showInputs && <ExpreinceForm onSave={handleSaveExpreince} onCancel={handleCancel}/>}
      </div>
      <div className="exp-list">
        {expreinces.map((expreince, index) => (
          <ExpreinceItem
            key={index}
            index={index}
            expreince={expreince}
            onRemove={handleRemoveExpreince}
          />
        ))}
      </div>
    </div>
  )
}

export default Expreince