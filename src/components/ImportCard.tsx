import React from 'react';
import Im from '../types/im';

type importCardProps = {
    mport : Im
}

const ImportCard = ({mport}:importCardProps) => {
  return (
    <div className='import-card'> 
        <h3>{mport.title}</h3>
        <p>{mport.resume}</p>
    </div>
  )
}

export default ImportCard