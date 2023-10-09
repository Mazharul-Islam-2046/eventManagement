import { useContext } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";

const Login = () => {


    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()



    const handleLogin= e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then (result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
        })
        .catch (error =>{
            console.error(error)
        })
    }







  return (
    <>
      <div className="bg-purple-700">
        <Navbar></Navbar>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-[80vh]">
        <h2 className="text-4xl mb-10 font-bold">Login</h2>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label mt-2">
                <p className="label-text-alt">Do not have an account?  <span className="text-blue-500"><Link to="/register">Register</Link></span></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600 text-white">Login</button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Login;
