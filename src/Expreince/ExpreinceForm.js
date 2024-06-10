import React, { useState } from 'react';
import Button from '@mui/material/Button';

function ExpreinceForm({ onSave, onCancel }) {
    const [exp, setExp] = useState('');

    const handleSave = () => {
        onSave({ exp });
        setExp('');
    };

    const handleCancel = () => {
        onCancel();
        setExp('');
    };

    return (
        <div>
            <input type="text" value={exp} onChange={(e) => setExp(e.target.value)} />
            <Button variant="outlined" onClick={handleSave}>SAVE</Button>
            <Button variant="outlined" onClick={handleCancel}>CANCEL</Button>
        </div>
    );
}

export default ExpreinceForm;