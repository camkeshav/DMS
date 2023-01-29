import React, { useEffect } from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

import './styles.css';
import temp from './robot.png';
import { log } from 'util';

function InfoSection() {
    const [role, setRole] = useState('user');
    const [Name, setName] = useState('');
    // const [adminName, setAdminName] = useState('');
    const [adminPass, setAdminPass] = useState('');
    const name = localStorage.getItem('Name');

    const handleChange = (event) => {
        setRole(event.target.value);
    }

    const handleSubmit = () => {
        loginRequest();
    }

    const loginRequest = async () => {
            const config = {
                'userName': localStorage.getItem('Name'),
        };
            const response = await axios.post(`http://172.22.24.193/login`, config);
            setName(response.data);
    }

    // useEffect(()=>{
    //     localStorage.setItem('Name', Name);
    // },[Name]);

    // useEffect(()=>{
    //     localStorage.setItem('Name', Name);
    // },[adminPass]);

    return (
        <>
            <InfoSec >
                <Container>
                    <InfoRow >
                        <InfoColumn>
                            <TextWrapper>
                                <form onSubmit={handleSubmit}>
                                    <h1>Document Management System</h1>
                                    <p className="role" >Your Role ?</p>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="user"
                                                checked={role === 'user'}
                                                onChange={handleChange}
                                            />
                                            User
                                        </label>
                                        <label className="radio2">
                                            <input
                                                type="radio"
                                                value="admin"
                                                checked={role === 'admin'}
                                                onChange={handleChange}
                                            />
                                            Admin
                                        </label>
                                        {role === 'user' &&
                                            <div>
                                                <input type="text" className="user-input" placeholder="Enter your username" onChange={e => setName(e.target.value)} value={Name} />
                                                <br />
                                                <button className="user-submit" onClick={(event)=>{
                                                    event.preventDefault();
                                                    localStorage.setItem('Name', Name);
                                                    loginRequest();
                                                }}>Enter</button>
                                                
                                            </div>
                                        }
                                        {role === 'admin' &&
                                            <div>
                                                <input type="text" className="user-input" placeholder="Enter your name" onChange={e => setName(e.target.value)} value={Name} />
                                                <input type="text" className="user-input" placeholder="Enter your password" onChange={e => setAdminPass(e.target.value)} value={adminPass} />
                                                <br />
                                                <button className="user-submit" onClick={(event)=>{
                                                    event.preventDefault();
                                                    localStorage.setItem('Name', Name);
                                                    loginRequest();
                                                }}>Enter</button>
                                            </div>
                                        }
                                    </div>
                                </form>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper >
                                <Img src={temp} alt="image" />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;