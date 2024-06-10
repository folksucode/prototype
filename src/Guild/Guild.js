import React, { useState } from 'react';

import './Guild.css'
import Button from '@mui/material/Button';


function Guild() {

  const [showGuildInputs, setShowGuildInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

  const handleAddGuild = () => {
    setShowGuildInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
  };

  return (
    <div className='guild-card'>
      <a>GUILD INFORMATION</a>

      <div className='btn-guild'>
        <Button variant="outlined" onClick={handleAddGuild}>ADD GUILD</Button>
        {showGuildInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
          <div>
            <input type="text" placeholder="Year" />
            <input type="text" placeholder="University" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Guild