import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OurServices from "../Components/OurServices";
import Newsletter from "../Components/Newsletter";
import OurPartners from "../Components/OurPartners";

const Home = () => {
    const ourServicesData = useLoaderData();
    console.log(ourServicesData);
    return (
        <div>
            <Header/>
            <OurServices ourSevicesData={ourServicesData}/> 
            <OurPartners/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;