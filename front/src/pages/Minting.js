import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { minting, nft, name, descript, title, Account } from '../store/Atom';
import { useNavigate } from 'react-router-dom';
import '../styles/Minting.css'

const Minting = () => {

    const [Title, setTitle] = useState('')
    const [Name, setName] = useState('')
    const [Descript, setDescript] = useState('')
    const navigateToNFT = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const CID = useRecoilValue(minting);
    const ACCOUNT = useRecoilValue(Account);

    const setNft = useSetRecoilState(nft);
    const NAME = useSetRecoilState(name);
    const TITLE = useSetRecoilState(title);
    const DESCRIPT = useSetRecoilState(descript);

    const titleHandler = (event) => {
        setTitle(event.currentTarget.value);
        TITLE(event.currentTarget.value)
    }
    const nameHandler = (event) => {
        setName(event.currentTarget.value);
        NAME(event.currentTarget.value)
    };
    const descriptionHandler = (event) => {
        setDescript(event.currentTarget.value);
        DESCRIPT(event.currentTarget.value)
    };

    const metaCid = {
        CID: CID,
        name: Name,
        title: Title,
        descript: Descript,
        attributes: [
            {
                trait_type: "",
                value: ""
            }
        ]
    };
    const toNft = () => {
        navigateToNFT('/nft')
    }
    const onMinting = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/minting', metaCid)
            .then((res) => {
                if (res.status === 200) {
                    const IPFS = res.data.IPFS;
                    console.log(IPFS);
                    alert("tokenURI 생성성공");
                    setNft(IPFS)
                    toNft();
                }
            })
    }
    return (
        <>
            <h1>TokenURI</h1>
            <section>
                <ul>
                    <li className='minting-li'>
                        CID : {CID}
                    </li>
                    <li className='minting-li-1'>
                        Accout: {ACCOUNT}
                    </li>
                </ul>
            </section>
            <form onSubmit={onMinting} className='minting2-container'>
                <div>
                    <input type="text" onChange={titleHandler} placeholder="제목" className="minting2-input" value={Title} ref={inputRef} />
                </div>
                <div>
                    <input type="text" onChange={nameHandler} placeholder="작가" className="minting2-input" value={Name} />
                </div>
                <div>
                    <input type="text" onChange={descriptionHandler} placeholder="설명" className="minting2-input" value={Descript} />

                </div>
                <div>
                    <button type='submit' className='minting2-btn'>tokenURI 생성</button>
                </div>
            </form>
        </>
    );
};

export default Minting