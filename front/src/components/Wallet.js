import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Account, buyerAccount, chainid } from '../store/Atom';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';
import '../styles/Wallet.css'

const injected = new InjectedConnector();
const Wallet = () => {
    // const [Active, setActive] = useState(true);
    const setAccount = useSetRecoilState(Account);
    const setbuyerAccount = useSetRecoilState(buyerAccount);
    const setChainid = useSetRecoilState(chainid);
    const navigateToOrder = useNavigate(null);
    const navigateToMinting = useNavigate(null);

    const {
        chainId,
        account,
        active,
        activate,
        deactivate
    } = useWeb3React();

    const handleConnect = () => {
        // setActive(!Active);

        if (active) {

            deactivate();
            return;
        }

        activate(injected, (error) => {
            if ('/No Ethereum provider was found on window.ethereum/'.test(error)) {
                window.open('https://metamask.io/download.html');
            }
        });
    }
    const toMinting = () => {
        setAccount(account);
        setChainid(chainId);
        navigateToMinting('/ipfs')
    }

    const toMarketPlace = () => {
        setbuyerAccount(account);
        setChainid(chainId);
        navigateToOrder('/order')
    }

    return (
        <>
            <h1 className='wallet-title'>Well come to NFTStation</h1>
            <ul className='wallet-con'>
                <li className='wallet-con-item'>Account: {account}</li>
                <li className='wallet-con-item'>ChainId: {chainId}</li>
                {/* <li className='wallet-con-item'>로그인 상태: {active}</li> */}
                <button className='wallet-con-btn' type="button" onClick={handleConnect}>{active ? 'disconnect' : 'connect'}</button>
                <button className='wallet-con-btn-1' type="button" onClick={toMinting} >To Minting</button>
                <button className='wallet-con-btn-2' type="button" onClick={toMarketPlace} >To Market</button>
            </ul>
        </>
    )
}

export default Wallet