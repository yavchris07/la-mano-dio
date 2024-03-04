import React from 'react';
import IKard from '../types/kard';
import '../styles/kard.scss'

type kardProps ={
    kard : IKard
}

const Kard = ({kard}:kardProps) => {
  return (
    <div className='kard'>
        <div className='picture'>
            <img src={kard.picture} alt=""/>
        </div>
        <p>{kard.resume}</p>
    </div>
  )
}

export default Kard