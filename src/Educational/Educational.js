import React, { useState } from 'react';
import './Educational.css';
import Button from '@mui/material/Button';
import EducationForm from './EducationForm';
import EducationItem from './EducationItem';

function Educational() {
    const [educations, setEducations] = useState([]);
    const [showInputs, setShowInputs] = useState(false);

    const handleAddEducation = () => {
        setShowInputs(true);
    };

    const handleSaveEducation = (newEducation) => {
        setEducations([...educations, newEducation]);
        setShowInputs(false);
    };

    const handleCancel = () => {
        setShowInputs(false);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducations = educations.filter((_, i) => i !== index);
        setEducations(updatedEducations);
    };

    return (
        <div className='educational-card'>
            <a>EDUCATIONAL INFORMATION</a>
            <div className='btn-educational'>
                <Button variant="outlined" onClick={handleAddEducation} >ADD EDUCATION</Button>
                {showInputs && <EducationForm onSave={handleSaveEducation} onCancel={handleCancel}/>}
            </div>
            <div className="education-list">
                {educations.map((education, index) => (
                    <EducationItem
                        key={index}
                        index={index}
                        education={education}
                        onRemove={handleRemoveEducation}
                    />
                ))}
            </div>
        </div>
    );
}

export default Educational;
