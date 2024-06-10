import React, { useEffect, useState } from 'react';

import './Intersts.css'
import Button from '@mui/material/Button';

function Intersts() {

  const [showInputs, setShowInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

  const handleAddEducation = () => {
    setShowInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
  };

  return (
    <div className='inter-card'>
      <a>INTERSTS INFORMATION</a>

      <div className='btn-inter'>
        <Button variant="outlined" onClick={handleAddEducation}>ADD INTERSTS</Button>
        {showInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
          <div>
            <input type="text" placeholder="Year" />
            <input type="text" placeholder="University" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Intersts