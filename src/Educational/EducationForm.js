import React, { useState } from 'react';
import Button from '@mui/material/Button';

function EducationForm({ onSave, onCancel }) {
    const [year, setYear] = useState('');
    const [university, setUniversity] = useState('');

    const handleSave = () => {
        onSave({ year, university });
        setYear('');
        setUniversity('');
    };

    const handleCancel = () => {
        onCancel();
        setYear('');
        setUniversity('');
    };

    return (
        <div>
            <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
            <input type="text" placeholder="University" value={university} onChange={(e) => setUniversity(e.target.value)} />
            <Button variant="outlined" onClick={handleSave}>SAVE</Button>
            <Button variant="outlined" onClick={handleCancel}>CANCEL</Button>
        </div>
    );
}

export default EducationForm;
