import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { linkChange } from '../store/Atom';
import '../styles/LogOut.css'

const LogOut = () => {
    const setLink = useSetRecoilState(linkChange);
    const navigate = useNavigate();

    const toLogout = () => {
        navigate('/');
    }
    const onLogout = () => {
        axios.get('/')
            .then(res => {
                if (res.status === 200) {
                    setLink((prev) => !prev);
                    toLogout();

                } else {
                    alert('로그아웃에 실패');
                }

            })
    }
    return (
        <>
            <div className='log-container'>
                <button className='log-btn' onClick={onLogout}>LOGOUT</button>
            </div>
        </>
    )
}

export default LogOut