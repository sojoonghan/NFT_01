import React from 'react'
import PubLink from './PubLink';
import PrivLink from './PrivLink';
import { useRecoilValue } from 'recoil'
import { linkChange } from '../store/Atom';

const Link = () => {
    const link = useRecoilValue(linkChange)
    if (link) {
        return <PubLink />
    }
    return <PrivLink />
}

export default Link