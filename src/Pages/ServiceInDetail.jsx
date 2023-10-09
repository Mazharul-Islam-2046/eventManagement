import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ServiceInDetail = () => {
    const {id} = useParams()
    const services = useLoaderData()
    const service = services.find((service) => service.service_id === id)
    const {service_name, indetail_description, price_range, image_url} = service

    return (
        <div>
            <div className="bg-purple-800">
            <Navbar/>
            </div>
            <div className="h-[120vh] mb-8">
                <img src={image_url} alt="" className="w-full h-3/5 object-cover" />
                <div className="mt-10 px-10 pb-16">
                    <h1 className="text-4xl font-bold">{service_name}</h1>
                    <p className="mb-8 mt-3 font-semibold pl-1">{price_range}</p>
                    <p className="text-xl leading-8 font-medium">{indetail_description}</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ServiceInDetail;