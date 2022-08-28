import React from 'react'
import axios from 'axios'
import { useRecoilValue } from 'recoil';
import { newID, Account, buyerAccount, img, nft, name, title, descript, price } from '../store/Atom';
import { useNavigate } from 'react-router-dom';
import '../styles/Oder.css'

const Order = () => {

    const ACCOUNT = useRecoilValue(Account);
    const buyerACCOUNT = useRecoilValue(buyerAccount);
    const IMG = useRecoilValue(img);
    const TOKENURI = useRecoilValue(nft);
    const NAME = useRecoilValue(name);
    const TITLE = useRecoilValue(title);
    const DESCRIPT = useRecoilValue(descript);
    const PRICE = useRecoilValue(price);
    const ID = useRecoilValue(newID);

    const goHome = useNavigate(null);

    const NftInfo = {
        account: ACCOUNT,
        buyeraccount: buyerACCOUNT,
        tokenURI: TOKENURI,
        price: PRICE,
        id: ID
    }

    const onOder = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/order', NftInfo).then((res) => {
            if (res.status === 200) {
                alert("구매성공")
                gohome();
            }

        }).catch((err) => {
            console.log(err)
            alert("구매실패")
        })
    }
    const gohome = () => {
        goHome('/home')
    }
    return (
        <>
            <section >
                <div className='div'>
                </div>
                <div className='container'>
                    <img src={IMG} alt={'order'} className='item' />
                    <div className='item-price'>
                        <p>제목:{TITLE}</p>
                        <p>작가:{NAME}</p>
                        <p>설명:{DESCRIPT}</p>
                        <p >가격: {PRICE} ETH</p>
                    </div>
                </div>
            </section>
            <section>
                <ul>
                    <li className='oder-li'>
                        판매자 지갑주소 : {ACCOUNT}
                    </li>
                    <li className='oder-li-1'>
                        구매자 지갑주소: {buyerACCOUNT}
                    </li>
                    <li className='oder-li-1'>
                        NFT 가격: {PRICE}
                    </li>
                    <li className='oder-li-1'>
                        tokenURI: {TOKENURI}
                    </li>
                    <li className='oder-li-1'>
                        newid: {ID}
                    </li>
                </ul>
                <div>
                    <button onClick={onOder} className='minting2-btn'>구매</button>
                </div>
            </section>
        </>
    )
}

export default Order