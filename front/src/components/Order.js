import React from 'react'
import axios from 'axios'
import { useRecoilValue } from 'recoil';
import { chainid, Account, img, nft, name, title, descript, price } from '../store/Atom';
import '../styles/Artist.css'

const Order = () => {

    const ACCOUNT = useRecoilValue(Account);
    const CHAINID = useRecoilValue(chainid);
    const IMG = useRecoilValue(img);
    const TOKENURI = useRecoilValue(nft);
    const NAME = useRecoilValue(name);
    const TITLE = useRecoilValue(title);
    const DESCRIPT = useRecoilValue(descript);
    const PRICE = useRecoilValue(price);

    const NftInfo = {
        account: ACCOUNT,
        chainid: CHAINID,
        tokenURI: TOKENURI,
        price: PRICE
    }

    const onOder = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/order', NftInfo).then((res) => {

            if (res.status === 200) {

            }

        }).catch((err) => {
            console.log(err)
            alert("구매실패")
        })
    }
    return (
        <>
            <div>
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
                    <form onSubmit={onOder} className='minting2-container'>
                        <div><label htmlFor='account'>Account:</label>
                            <input id='account' type="text" value={ACCOUNT} className="minting2-input" />
                        </div>
                        <div><label htmlFor="chain" >ChainID:</label>
                            <input id="chain" type="text" className="minting2-input" value={CHAINID} />
                        </div>
                        <div><label htmlFor="token">tokenURI</label>
                            <input id="token" type="text" className="minting2-input" value={TOKENURI} />
                        </div>
                        <div>
                            <button type='submit' className='minting2-btn'>구매</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Order