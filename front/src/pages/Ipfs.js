import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { minting, img } from '../store/Atom';
import '../styles/ipfs.css'

const Ipfs = () => {
    const inputRef = useRef(null);
    const [imG, setImg] = useState('');
    const [imgURL, setImgURL] = useState('');
    const navigateTomin = useNavigate(null);
    const setCid = useSetRecoilState(minting);
    const imgPath = useSetRecoilState(img);

    const toMinting = () => {
        navigateTomin('/minting', true)
    }

    const focusInput = () => {
        inputRef.current.click();
    }

    const upLoad = (evnet) => {
        evnet.preventDefault();

        const formData = new FormData();
        formData.append('img', imG);

        axios.post("http://localhost:3001/ipfs", formData, { headers: { "Content-Type": "multipart/form-data" }, })
            .then((res) => {
                const cid = res.data.cid;
                const Path = res.data.result;
                imgPath(Path)
                console.log(Path);
                console.log(cid);
                if (res.status === 200) {
                    setCid(cid)
                    toMinting();
                }
            })
            .catch(err => {
                console.log(err)
            });
    }
    const saveImg = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setImgURL(URL.createObjectURL(file))
        setImg(file);
    }

    // const deleteImt = () => {
    //     URL.revokeObjectURL(img);
    //     setImg('')
    // }
    return (
        <>
            <section className='container-img'>
                {imgURL && (<img src={imgURL} alt={'a'} />)}  </section>
            <section >
                <form className='container-input'>
                    <h1>IPFS 연결</h1>
                    <button onClick={focusInput} className='input-item'>이미지 선택, 보기</button>
                    <input type='file' name='img' accept='image/*' onChange={saveImg} ref={inputRef} style={{ display: 'none' }} />
                    < button className='btn-item' onClick={upLoad}> IPFS 생성</button>
                </form>
            </section>
        </>
    )
}

export default Ipfs