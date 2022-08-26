import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { minting, nft, name, descript, title, price, Account, chainid } from '../store/Atom';
import { useNavigate } from 'react-router-dom';
import '../styles/Minting.css'

const Minting = () => {

    const [Title, setTitle] = useState('')
    const [Name, setName] = useState('')
    const [Descript, setDescript] = useState('')
    const [Price, setPrice] = useState('')
    const navigateToNFT = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const CID = useRecoilValue(minting);
    const ACCOUNT = useRecoilValue(Account);
    const CHAINID = useRecoilValue(chainid);

    const setNft = useSetRecoilState(nft);
    const NAME = useSetRecoilState(name);
    const TITLE = useSetRecoilState(title);
    const DESCRIPT = useSetRecoilState(descript);
    const PRICE = useSetRecoilState(price);


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

    const priceHandler = (event) => {
        setPrice(event.currentTarget.value);
        PRICE(event.currentTarget.value)
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
                    alert("민팅성공");
                    setNft(IPFS)
                    toNft();
                }
            })
    }
    return (
        <>
            <form onSubmit={onMinting} className='minting2-container'>
                <h1>CID : {CID}</h1>
                <div><label htmlFor="cid">CID</label>
                    <input id='cid' type="text" value={CID} className="minting2-input" />
                </div>
                <div><label htmlFor="acc">Account</label>
                    <input id="acc" type="text" value={ACCOUNT} className="minting2-input" />
                </div>
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
                    <input type="text" onChange={priceHandler} placeholder="가격" className="minting2-input" value={Price} />

                </div>
                <div>
                    <button type='submit' className='minting2-btn'>Minting</button>
                </div>
            </form>
        </>
    );
};

export default Minting