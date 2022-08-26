import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css'

const Main = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPassword] = useState('');
    const [confirmPW, setConfirmPW] = useState('');
    const refInput = useRef();

    useEffect(() => {
        refInput.current.focus();
    }, [])

    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);

    };
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };
    const onConfirmPWHandler = (event) => {
        setConfirmPW(event.currentTarget.value);
    };


    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (pw !== confirmPW) {
            return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
        }
        axios.post("http://localhost:3001/", { name, email, pw }).then((res) => {
            if (res.status === 200) {
                toLogin();
            } else { return alert("회원가입 실패") };
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <div className='login' onSubmit={onSubmitHandler}>
                <form >
                    <div>
                        <input ref={refInput} type="text" name="name" placeholder='이름' value={name} onChange={onNameHandler} className="login-input" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder='이메일' value={email} onChange={onEmailHandler} className="login-input" />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder='비밀번호' value={pw} onChange={onPasswordHandler} className="login-input" />
                    </div>
                    <div>
                        <input type="password" name="confirmPW" placeholder='비밀번호 확인' value={confirmPW} onChange={onConfirmPWHandler} className="login-input" />
                    </div>
                    <div><button type="submit" className="login-btn">계정 생성하기</button></div>
                </form>
            </div>
        </>
    );
}

export default Main