import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Home from '../pages/Home';
import Market from '../pages/Market';
import SignUp from '../pages/SignUp';
import Ipfs from '../pages/Ipfs';
import Minting from '../pages/Minting';
import Nft from '../pages/Nft';
import LogOut from '../pages/LogOut';
import PrivateNav from '../nav/PrivateNav';
import Order from '../components/Order';
import A from '../artists/A'
import B from '../artists/B'
import C from '../artists/C'
import D from '../artists/D'
import E from '../artists/E'
import F from '../artists/F'
import G from '../artists/G'
import H from '../artists/H'
import I from '../artists/I'

const PrivLink = () => {
    return (
        <>
            <Router>
                <PrivateNav />
                <Routes >
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/ipfs" element={<Ipfs />} />
                    <Route path="/minting" element={<Minting />} />
                    <Route path="/nft" element={<Nft />} />
                    <Route path="/wallet" element={<SignUp />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path='/artist/a' element={<A />} />
                    <Route path='/artist/b' element={<B />} />
                    <Route path='/artist/c' element={<C />} />
                    <Route path='/artist/d' element={<D />} />
                    <Route path='/artist/e' element={<E />} />
                    <Route path='/artist/f' element={<F />} />
                    <Route path='/artist/g' element={<G />} />
                    <Route path='/artist/h' element={<H />} />
                    <Route path='/artist/i' element={<I />} />
                </Routes>
            </Router>
        </>
    );
}

export default PrivLink;
