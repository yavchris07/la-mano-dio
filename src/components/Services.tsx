import React from 'react'
import IService from '../types/service'


type serviceCardProps = {
    service : IService
}

const ServicesCard = ({service}:serviceCardProps) => {
  return (
    <div className='services-cards'>
        <div className='image'><img src={service.img} alt="" /></div> 
        <h3>{service.title}</h3>
        <p>{service.resume}</p>
        <p>
            <span style={{color:'black',fontWeight:'bold'}}>Notre point fort : </span> 
            {service.pf.length > 0 ? service.pf : 'Excellence dans nos travails'}
        </p>
    </div>
  )
}

export default ServicesCard