import React, { useState, useEffect, useRef } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';
import { nft, img, Account, price, newID } from '../store/Atom';
import axios from 'axios';
import '../styles/Nft.css'

const Nft = () => {
    const [Price, setPrice] = useState('')

    const toHome = useNavigate(null);

    const tokenURI = useRecoilValue(nft)
    const ACCOUNT = useRecoilValue(Account)
    const Img = useRecoilValue(img)
    const staticPrice = useRef(null);
    const priceSet = useSetRecoilState(price);
    const scID = useSetRecoilState(newID);

    useEffect(() => {
        staticPrice.current.focus();

    }, []);

    const accURI = {
        account: ACCOUNT,
        tokenuri: tokenURI,
        price: Price,
    };

    const onNft = (event) => {
        axios.post('http://localhost:3001/nft', accURI).then((res) => {
            if (res.status === 200) {
                const newId = res.data.id;
                console.log(newId)
                alert(`민팅 성공 NFT IDcode: ${newId}`)
                scID(newId);
                goHome();
            }
        })
    }

    const priceHandler = (event) => {
        setPrice(event.currentTarget.value);
        priceSet(event.currentTarget.value)
    };
    const goHome = () => {
        toHome('/home')
    }

    return (
        <>
            <section className='container-img'>
                <img src={Img} alt="nft_img" className='nft-img' />
            </section>
            <section >
                <form onClick={onNft} className='nft-container'>
                    <h1>tokenURI : {tokenURI}</h1>
                    <div>
                        <input type="text" onChange={priceHandler} placeholder="가격" className="nft-input" value={Price} ref={staticPrice} />
                    </div>
                    <div>
                        <button type='submit' className='nft-btn'>민팅
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Nft