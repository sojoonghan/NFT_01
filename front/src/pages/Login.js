import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { linkChange } from '../store/Atom';
import '../styles/Login.css'

const Login = () => {

    const setLink = useSetRecoilState(linkChange);
    const [email, setEmail] = useState('');
    const [pw, setPassword] = useState('');
    const refInput = useRef();
    const navigateHome = useNavigate(null);

    useEffect(() => {
        refInput.current.focus();
    }, [])

    const toHome = () => {
        navigateHome('/home', true);
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/login', { email, pw }).then((res) => {
            if (res.status === 200) {
                setLink((prev) => !prev);
                toHome();
            } else {
                alert('로그인 실패');
            }
        })
    }
    return (
        <div className='login'>
            <form onSubmit={onSubmitHandler} >
                <div>
                    <input ref={refInput} type="email" name="email" placeholder='이메일' value={email} onChange={onEmailHandler} className="login-input" />
                </div>
                <div>
                    <input type="password" name="password" placeholder='비밀번호' value={pw} onChange={onPasswordHandler} className="login-input" />
                </div>
                <div><button type="submit" className="login-btn">로그인</button></div>
            </form>
        </div>
    );
};

export default Login