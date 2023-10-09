import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    console.log(service);
    const {service_id, service_name, price_range, description, image_url} = service;
    console.log(image_url);
    return (
        <div className='flex flex-col shadow-lg rounded-md text-center pb-6  bg-orange-100 items-center border-2 border-gray-300'>
            <img className='w-full h-40 object-cover' src= {image_url} alt="" />
            <div className='flex-grow px-14 mt-6'>
            <h1 className='text-2xl font-semibold'>{service_name}</h1>
            <p className='text-sm mt-2 mb-2'>{description}</p>
            </div>
            <div className='px-14'>
                <p className='font-bold mb-6'>{price_range}</p>
                <Link to={`/details/${service_id}`} className='py-2 px-4 bg-gray-800 text-white'>Details</Link>
            </div>
        </div>
    );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}