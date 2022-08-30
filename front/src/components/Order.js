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

    const navigateHome = useNavigate();
    const tohome = () => {
        navigateHome('/home');
    }

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
                tohome();
            }

        }).catch((err) => {
            console.log(err)
            alert("구매실패")
        })
    }

    return (
        <>
            <section className='container'>
                <img src={IMG} alt={'order'} className='item' />
                <div className='item-price'>
                    <p>제목:{TITLE}</p>
                    <p>작가:{NAME}</p>
                    <p>설명:{DESCRIPT}</p>
                    <p >가격: {PRICE} ETH</p>
                </div>
                <ul className='container-ul'>
                    <li className='oder-li-1'>
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
                        tokenID : {ID}
                    </li>
                </ul>
                <button onClick={onOder} className='oder-btn'>구매</button>
            </section>
        </>
    )
}

export default Order