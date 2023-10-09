import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 w-full">
        <Navbar></Navbar>
      </div>
      <div className="m-0 p-0 h-[100vh] overflow-hidden">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        isPlaying={true}
        interval={6500}
      >
        <Slider>
          <Slide index={0} className="m-0 p-0">
            <div className="relative bg-black w-full h-[100vh] overflow-hidden flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              >
                <source
                  src="/src/assets/marriage_header.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="text-center z-20 opacity-90">
                    <h1 className="text-5xl font-bold text-purple-200 text-center leading-[60px]">Creating Unforgettable Moments Your Dream <br />  Wedding, Our Expertise
                    </h1>
                    <p className="text-xl font-semibold text-white text-center leading-7 mt-10 mb-8">Crafting Your Perfect Day, One Detail at a Time. Welcome to Mz Event, <br /> Where Dreams Become Reality. Discover the Art of Extraordinary Wedding <br /> Experiences with Us!</p>

                    <NavLink className="text-purple-200 text-lg hover:text-white hover:bg-purple-950 cursor-pointer bg-purple-900 py-3 px-6" to="/contact-us">Contact Us</NavLink>

              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="relative bg-black w-full h-[100vh] overflow-hidden flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              >
                <source
                  src="/src/assets/social_gathering_header.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="text-center z-20 opacity-90">
                    <h1 className="text-5xl font-bold text-purple-200 text-center leading-[60px]">Gather & Celebrate: Where Every Occasion <br /> Becomes Extraordinary
                    </h1>
                    <p className="text-xl font-semibold text-white text-center leading-7 mt-10 mb-8">Transforming Moments into Memories Your Premier Partner for <br /> Exceptional Social Gatherings. Join Us in  Crafting Unforgettable Events!</p>

                    <NavLink className="text-purple-200 text-lg hover:text-white hover:bg-purple-950 cursor-pointer bg-purple-900 py-3 px-6" to="/contact-us">Contact Us</NavLink>

              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="relative bg-black w-full h-[100vh] overflow-hidden flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
              >
                <source
                  src="/src/assets/birthday_header.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="text-center z-20 opacity-90">
                    <h1 className="text-5xl font-bold text-purple-200 text-center leading-[60px]">Gather & Celebrate: Where Every Occasion <br />Becomes Extraordinary
                    </h1>
                    <p className="text-xl font-semibold text-white text-center leading-7 mt-10 mb-8">Crafting Your Perfect Day, One Detail at a Time. Welcome to Mz Event, <br /> Where Dreams Become Reality. Discover the Art of Extraordinary Wedding <br /> Experiences with Us!</p>

                    <NavLink className="text-purple-200 text-lg hover:text-white hover:bg-purple-950 cursor-pointer bg-purple-900 py-3 px-6" to="/contact-us">Contact Us</NavLink>

              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
      </div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Header;
