// import React, { useState, useRef } from 'react';
// import axios from 'axios';

// import { BsCameraFill } from "react-icons/bs";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Button from '@mui/material/Button';

// import './UserPage.css'

// function UserPage() {

//     const [startDate, setStartDate] = useState(null);
//     const positions = ['1', '2', '3', '4'];
//     const [coverPhoto, setCoverPhoto] = useState(null);
//     const [profilePhoto, setProfilePhoto] = useState(null);

//     const InputProfile = useRef(null);

//     const handleProfile = () => {
//         InputProfile.current.click();
//     };

//     const handleProfileChange = async (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setProfilePhoto(URL.createObjectURL(file));

//             const formData = new FormData();
//             formData.append('profilePhoro', file);

//             try {
//                 const res = await axios.post('', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/formdata',
//                     },
//                 });

//                 console.log('Response:', res.data);
//             } catch (error) {
//                 console.error('Error uploading profile photo:', error)
//             }
//         }
//     };

//     const InputCover = useRef(null);

//     const handleCover = () => {
//         InputCover.current.click();
//     };

//     const handleCoverChange = async (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setCoverPhoto(URL.createObjectURL(file));

//             const formData = new FormData();
//             formData.append('coverPhoto', file);

//             try {
//                 const res = await axios.post('', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });

//                 console.log('Response:', res.data);
//             } catch (error) {
//                 console.error('Error uploading cover photo:', error);
//             }
//         }
//     };

//     const [showEduInputs, setShowEduInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

//     const handleAddEducation = () => {
//         setShowEduInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
//     };

//     const [showGuildInputs, setShowGuildInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

//     const handleAddGuild = () => {
//         setShowGuildInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
//     };

//     const [showExpInputs, setShowExpInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

//     const handleAddExp = () => {
//         setShowExpInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
//     };

//     const [showSkillInputs, setShowSkillInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

//     const handleAddSkill = () => {
//         setShowSkillInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
//     };

//     const [showInterstsInputs, setShowInterstsInputs] = useState(false); // สถานะเพื่อแสดง/ซ่อน input fields

//     const handleAddIntersts = () => {
//         setShowInterstsInputs(true); // เมื่อกดปุ่ม "ADD EDUCATION" ให้แสดง input fields
//     };

//     return (
//         <div className='all-card'>
//             <div>
//                 <div className="user-card">
//                     <a>USER INFORMATION</a>
//                     <div className="inner-card">
//                         <div className="upper-card">
//                             <div className="image-cover">
//                                 <img
//                                     src={coverPhoto || "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}
//                                     alt="Cover"
//                                 />
//                                 <div className="btn-cover" onClick={handleCover}>
//                                     <input
//                                         type="file"
//                                         accept='image/jpeg, image/png, image/jpg'
//                                         ref={InputCover}
//                                         style={{ display: 'none' }}
//                                         onChange={handleCoverChange}
//                                     />
//                                     <BsCameraFill className="camera-icon-cover" /> EDIT COVER PHOTO
//                                 </div>
//                             </div>
//                             <div className="image-profile">
//                                 <img
//                                     src={profilePhoto || "https://i.pinimg.com/736x/67/df/18/67df18dedfda56943b771c2acd5b65be.jpg"}
//                                     alt="Profile"
//                                 />
//                                 <div className="btn-profile" onClick={handleProfile}>
//                                     <input
//                                         type="file"
//                                         accept='image/jpeg, image/png, image/jpg'
//                                         ref={InputProfile}
//                                         style={{ display: 'none' }}
//                                         onChange={handleProfileChange}
//                                     />
//                                     <BsCameraFill className="camera-icon-profile" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='lower-card'>
//                             <div className='column'>
//                                 <div className="left-column">
//                                     <label htmlFor="username">USERNAME</label>
//                                     <input type="text" id="username" name="username" />
//                                     <label htmlFor="firstname">FIRST NAME</label>
//                                     <input type="text" id="firstname" name="firstname" />
//                                     <label htmlFor="position">POSITION</label>
//                                     <select id="position" name="position" className="custom-select">
//                                         <option value="" disabled selected>Please select</option>
//                                         {positions.map((position, index) => (
//                                             <option key={index} value={position.toLowerCase()}>{position}</option>
//                                         ))}
//                                     </select>
//                                     <label htmlFor="telephone">TELEPHONE NUMBER</label>
//                                     <input type="text" id="telephone" name="telephone" />
//                                 </div>
//                                 <div className="right-column">
//                                     <label htmlFor="nickname">NICK NAME</label>
//                                     <input type="text" id="nickname" name="nickname" />
//                                     <label htmlFor="lastname">LAST NAME</label>
//                                     <input type="text" id="lastname" name="lastname" />
//                                     <label htmlFor="nationality">NATIONALITY</label>
//                                     <input type="text" id="nationality" name="nationality" />
//                                     <label htmlFor="startingdate">STARTING DATE</label>
//                                     <div className="date-picker-wrapper">
//                                         <DatePicker
//                                             id="startingdate"
//                                             name="startingdate"
//                                             selected={startDate} // ใช้ state สำหรับเก็บค่าวันที่
//                                             onChange={date => setStartDate(date)} // ใช้ฟังก์ชันเพื่อเปลี่ยนค่าวันที่เมื่อมีการเลือก
//                                         />
//                                         <CalendarMonthIcon className="Calendar-icon" />
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//                 <div className="contact-card">
//                     <a>CONTACT INFORMATION</a>
//                     <div className='form-contact'>
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="address">ADDRESS</label>
//                                 <input type="text" id="address" name="address" placeholder=' ADDRESS' />
//                             </div>
//                             <div className='contact-select'>
//                                 <div className="form-group">
//                                     <label htmlFor="sub-district">SUB DISTRICT</label>
//                                     <select id="sub-district" name="sub-district">
//                                         <option value="" disabled selected>Please select</option>
//                                         <option value="sub-district-1">Sub District 1</option>
//                                         <option value="sub-district-2">Sub District 2</option>
//                                         <option value="sub-district-3">Sub District 3</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="district">DISTRICT</label>
//                                     <select id="district" name="district">
//                                         <option value="" disabled selected>Please select</option>
//                                         <option value="district-1">District 1</option>
//                                         <option value="district-2">District 2</option>
//                                         <option value="district-3">District 3</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="province">PROVINCE</label>
//                                     <select id="province" name="province">
//                                         <option value="" disabled selected>Please select</option>
//                                         <option value="province-1">Province 1</option>
//                                         <option value="province-2">Province 2</option>
//                                         <option value="province-3">Province 3</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="postal-code">POSTAL CODE</label>
//                                     <select id="postal-code" name="postal-code">
//                                         <option value="" disabled selected>Please select</option>
//                                         <option value="postal-code-1">Postal Code 1</option>
//                                         <option value="postal-code-2">Postal Code 2</option>
//                                         <option value="postal-code-3">Postal Code 3</option>
//                                     </select>
//                                 </div>

//                             </div>
//                             <div className='so-contact'>
//                                 <div className="form-group">
//                                     <label htmlFor="facebook">FACEBOOK</label>
//                                     <input type="text" id="facebook" name="facebook" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="line">LINE</label>
//                                     <input type="text" id="line" name="line" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="postal-code">POSTAL CODE</label>
//                                     <input type="text" id="postal-code" name="postal-code" />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div className='educational-card'>
//                     <a>EDUCATIONAL INFORMATION</a>
//                     <div className='btn-educational'>
//                         <Button variant="outlined" onClick={handleAddEducation}>ADD EDUCATION</Button>
//                         {showEduInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
//                             <div>
//                                 <input type="text" placeholder="Year" />
//                                 <input type="text" placeholder="University" />
//                             </div>
//                         )}
//                     </div>

//                 </div>

//                 <div className='exp-card'>
//                     <a>EXPREINCE INFORMATION</a>

//                     <div className='btn-exp'>
//                         <Button variant="outlined" onClick={handleAddExp}>ADD EXPREINCE</Button>
//                         {showExpInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
//                             <div>
//                                 <input type="text" placeholder="Year" />
//                                 <input type="text" placeholder="University" />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className='skill-card'>
//                     <a>SKILL INFORMATION</a>
//                     <div className='btn-skill'>
//                         <Button variant="outlined" onClick={handleAddSkill}>ADD SKILL</Button>
//                         {showSkillInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
//                             <div>
//                                 <input type="text" placeholder="Year" />
//                                 <input type="text" placeholder="University" />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className='inter-card'>
//                     <a>INTERSTS INFORMATION</a>

//                     <div className='btn-inter'>
//                         <Button variant="outlined" onClick={handleAddIntersts}>ADD INTERSTS</Button>
//                         {showInterstsInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
//                             <div>
//                                 <input type="text" placeholder="Year" />
//                                 <input type="text" placeholder="University" />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className='guild-card'>
//                     <a>GUILD INFORMATION</a>

//                     <div className='btn-guild'>
//                         <Button variant="outlined" onClick={handleAddGuild}>ADD GUILD</Button>
//                         {showGuildInputs && ( // แสดง input fields เมื่อ showInputs เป็น true
//                             <div>
//                                 <input type="text" placeholder="Year" />
//                                 <input type="text" placeholder="University" />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default UserPage