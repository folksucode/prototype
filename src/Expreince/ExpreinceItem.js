import React from 'react';
import Button from '@mui/material/Button';


function ExpreinceItem({ index, expreince, onRemove }) {
    const handleRemove = () => {
        onRemove(index);
    };

    return (
        <div className="expreince-item">
            <div className='expreince'>
                <p>{expreince.exp}</p>
            </div>

            <Button variant="outlined" onClick={handleRemove}>REMOVE</Button>
        </div>
    );
}

export default ExpreinceItem;