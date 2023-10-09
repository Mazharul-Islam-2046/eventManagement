import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';


const OurServices = ({ourSevicesData}) => {

    
    return (
        <div className='grid grid-cols-3 max-w-[80%] mx-auto gap-6 py-20'>
            <>
            {
                ourSevicesData.map((service, idx)=>
                    <ServiceCard key={idx} service={service}></ServiceCard>
                )
            }
            </>
        </div>
    );
};

export default OurServices;

OurServices.propTypes = {
    ourSevicesData: PropTypes.array
}
