import React from 'react';
import Button from '@mui/material/Button';

function EducationItem({ index, education, onRemove }) {
    const handleRemove = () => {
        onRemove(index);
    };

    return (
        <div className="education-item">
            <div className='education'>
                <p>{education.year}</p>
                <p>{education.university}</p>
            </div>

            <Button variant="outlined" onClick={handleRemove}>REMOVE</Button>
        </div>
    );
}

export default EducationItem;
