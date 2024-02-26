import React from 'react'
import IService from '../types/service'


type serviceCardProps = {
    service : IService
}

const ServiceCard = ({service}:serviceCardProps) => {
  return (
    <div className='service-card'> 
        <h3>{service.title}</h3>
        <p>{service.resume}</p>
    </div>
  )
}

export default ServiceCard