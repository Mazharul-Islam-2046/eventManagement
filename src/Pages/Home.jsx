import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import OurServices from "../Components/OurServices";
import Newsletter from "../Components/Newsletter";

const Home = () => {
    const ourServicesData = useLoaderData();
    console.log(ourServicesData);
    return (
        <div>
            <Header/>
            <OurServices ourSevicesData={ourServicesData}/> 
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;