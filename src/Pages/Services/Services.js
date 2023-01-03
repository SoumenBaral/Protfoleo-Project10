import React, { useEffect, useState } from 'react';
import Service from './Service'
const Services = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='md:grid grid-cols-2 m-10 gap-5'>
            
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;