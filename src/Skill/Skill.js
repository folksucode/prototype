import React, { useState } from 'react';

import './Skill.css'
import Button from '@mui/material/Button';

function Skill() {

    const [showSkillInputs, setShowSkillInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

    const handleAddSkill = () => {
        setShowSkillInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
    };

    return (
        <div className='skill-card'>
            <a>SKILL INFORMATION</a>
            <div className='btn-skill'>
                <Button variant="outlined" onClick={handleAddSkill}>ADD SKILL</Button>
                {showSkillInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
                    <div>
                        <input type="text" placeholder="Year" />
                        <input type="text" placeholder="University" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Skill