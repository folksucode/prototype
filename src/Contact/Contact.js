import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-card">
            <a>CONTACT INFORMATION</a>
            <div className='form-contact'>
                <form>
                    <div className="form-group">
                        <label htmlFor="address">ADDRESS</label>
                        <input type="text" id="address" name="address" placeholder=' ADDRESS' />
                    </div>
                    <div className='contact-select'>
                        <div className="form-group">
                            <label htmlFor="sub-district">SUB DISTRICT</label>
                            <select id="sub-district" name="sub-district">
                                <option value="" disabled selected>Please select</option>
                                <option value="sub-district-1">Sub District 1</option>
                                <option value="sub-district-2">Sub District 2</option>
                                <option value="sub-district-3">Sub District 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="district">DISTRICT</label>
                            <select id="district" name="district">
                                <option value="" disabled selected>Please select</option>
                                <option value="district-1">District 1</option>
                                <option value="district-2">District 2</option>
                                <option value="district-3">District 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="province">PROVINCE</label>
                            <select id="province" name="province">
                                <option value="" disabled selected>Please select</option>
                                <option value="province-1">Province 1</option>
                                <option value="province-2">Province 2</option>
                                <option value="province-3">Province 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postal-code">POSTAL CODE</label>
                            <select id="postal-code" name="postal-code">
                                <option value="" disabled selected>Please select</option>
                                <option value="postal-code-1">Postal Code 1</option>
                                <option value="postal-code-2">Postal Code 2</option>
                                <option value="postal-code-3">Postal Code 3</option>
                            </select>
                        </div>

                    </div>
                    <div className='so-contact'>
                        <div className="form-group">
                            <label htmlFor="facebook">FACEBOOK</label>
                            <input type="text" id="facebook" name="facebook" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="line">LINE</label>
                            <input type="text" id="line" name="line" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="postal-code">POSTAL CODE</label>
                            <input type="text" id="postal-code" name="postal-code" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact