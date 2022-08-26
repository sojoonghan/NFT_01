import React, { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom';
import { nft, img, Account } from '../store/Atom';
import axios from 'axios';
import '../styles/Nft.css'

const Nft = () => {
    // const [IMG, setIMG] = useState(null);
    const toHome = useNavigate(null);
    const tokenURI = useRecoilValue(nft)
    const ACCOUNT = useRecoilValue(Account)
    const Img = useRecoilValue(img)

    // useEffect(() => {
    //     axios.get('/img').then((res) => {
    //         setIMG(res.data);
    //     })
    // }, [])
    const accURI = {
        account: ACCOUNT,
        tokenuri: tokenURI
    };
    const onNft = (event) => {
        axios.post('http://localhost:3001/nft', accURI).then((res) => {
            if (res.status === 200) {
                goHome();
            }

        })

    }
    const goHome = () => {
        toHome('/home')
    }

    return (
        <><section className='nft-container'>
            <img src={Img} alt="nft_img" className='nft-img' />
            tokenURI : {tokenURI}
            <button onClick={onNft} className='nft-btn'>NFT 민팅
            </button>
        </section>
        </>
    )
}

export default Nft