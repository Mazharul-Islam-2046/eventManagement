import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <div className="bg-purple-800">
        <Navbar />
      </div>
      <div className="mb-8">
        <img
          src={
            "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
          alt=""
          className="w-full h-3/5 object-cover"
        />
        <div className="mt-10 px-10 pb-16 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Elegant Occasions Event Management
          </h1>
          <p className="text-xl leading-8 font-medium">
            Welcome to Elegant Occasions Event Management, where dreams become
            reality and every event is a masterpiece in the making. We are more
            than just event planners; we are your partners in creating
            unforgettable moments
          </p>
        </div>

        <div className="shadow-md w-2/5 mx-auto text-center text-blue-100 bg-gray-800 py-8 px-10">
          <h1 className="text-4xl font-bold mb-4">
          Our Story
          </h1>
          <p className="text-lg leading-8 font-medium">
          At Elegant Occasions, we believe that every life is a collection of beautiful moments, and it's our mission to make those moments extraordinary. Founded by Emily Anderson, a visionary in the world of event management, our journey began with a passion for turning ordinary events into extraordinary experiences.

With over a decade of experience in the industry, Emily and her dedicated team have crafted a reputation for excellence and creativity. We've had the privilege of bringing countless smiles, tears of joy, and memories that last a lifetime to our clients.


          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
