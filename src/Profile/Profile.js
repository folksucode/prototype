import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';
import { BsCameraFill } from "react-icons/bs";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Profile() {

    const [startDate, setStartDate] = useState(null);
    const positions = ['1', '2', '3', '4'];
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const InputCover = useRef(null);

    const handleCover = () => {
        InputCover.current.click();
    };

    const [selectedFile, setSelectedFile] = useState(null);

    const InputProfile = useRef(null);

    const handleProfile = () => {
        InputProfile.current.click();
    };

    const handleProfileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePhoto(URL.createObjectURL(file));

            const formData = new FormData();
            formData.append('profilePhoro', file);

            try {
                const res = await axios.post('', formData, {
                    headers: {
                        'Content-Type': 'multipart/formdata',
                    },
                });

                console.log('Response:', res.data);
            } catch (error) {
                console.error('Error uploading profile photo:', error)
            }
        }
    };

    const handleCoverChange = (event) => {
        const fileCover = event.target.files[0];
        console.log(fileCover);
        if (fileCover) {
            setCoverPhoto(URL.createObjectURL(fileCover));
            setSelectedFile(fileCover);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('coverPhoto', selectedFile);

            try {
                const res = await axios.post('http://localhost:3000/uploadcover', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Response:', res.data);
            } catch (error) {
                console.error('Error uploading cover photo:', error);
            }
        } else {
            console.error('No file selected!');
        }
    };

    return (
        <div className="card">
            <a>USER INFORMATION</a>
            <div className="inner-card">
                <div className="upper-card">
                    <div className="image-cover">
                        <img
                            src={coverPhoto || "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}
                            alt="Cover"
                        />
                        <div className="btn-cover" onClick={handleCover}>
                            <input
                                type="file"
                                accept='image/jpeg, image/png, image/jpg'
                                ref={InputCover}
                                style={{ display: 'none' }}
                                onChange={handleCoverChange}
                            />
                            <BsCameraFill className="camera-icon-cover" /> EDIT COVER PHOTO
                        </div>
                    </div>
                    <div className="image-profile">
                        <img
                            src={profilePhoto || "https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-54643.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1712880000&semt=ais"}
                            alt="Profile"
                        />
                        <div className="btn-profile" onClick={handleProfile}>
                            <input
                                type="file"
                                accept='image/jpeg, image/png, image/jpg'
                                ref={InputProfile}
                                style={{ display: 'none' }}
                                onChange={handleProfileChange}
                            />
                            <BsCameraFill className="camera-icon-profile" />
                        </div>
                    </div>
                </div>
                <div className='lower-card'>
                    <div className='column'>
                        <div className="left-column">
                            <label htmlFor="username">USERNAME</label>
                            <input type="text" id="username" name="username" />
                            <label htmlFor="firstname">FIRST NAME</label>
                            <input type="text" id="firstname" name="firstname" />
                            <label htmlFor="position">POSITION</label>
                            <select id="position" name="position" className="custom-select">
                                <option value="" disabled selected>Please select</option>
                                {positions.map((position, index) => (
                                    <option key={index} value={position.toLowerCase()}>{position}</option>
                                ))}
                            </select>
                            <label htmlFor="telephone">TELEPHONE NUMBER</label>
                            <input type="text" id="telephone" name="telephone" />
                        </div>
                        <div className="right-column">
                            <label htmlFor="nickname">NICK NAME</label>
                            <input type="text" id="nickname" name="nickname" />
                            <label htmlFor="lastname">LAST NAME</label>
                            <input type="text" id="lastname" name="lastname" />
                            <label htmlFor="nationality">NATIONALITY</label>
                            <input type="text" id="nationality" name="nationality" />
                            <label htmlFor="startingdate">STARTING DATE</label>
                            <div className="date-picker-wrapper">
                                <DatePicker
                                    id="startingdate"
                                    name="startingdate"
                                    selected={startDate} // ใช้ state สำหรับเก็บค่าวันที่
                                    onChange={date => setStartDate(date)} // ใช้ฟังก์ชันเพื่อเปลี่ยนค่าวันที่เมื่อมีการเลือก
                                />
                                <CalendarMonthIcon className="Calendar-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleUpload}>Upload Cover Photo</button>
        </div>
        
    )
}

export default Profile