import { useContext } from "react";
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";

const Register = () => {


    const { createUser } = useContext(AuthContext);

    const handleRegistration= e => {
            e.preventDefault()
            const form = new FormData(e.currentTarget);
            const name = form.get('name');
            const photo_url = form.get('photo_url');
            const email = form.get('email');
            const password = form.get('password');
            console.log(name, photo_url);



            createUser(email, password)
            .then(result => {
                result.user.photo_url = photo_url
                result.user.name = name
            })
            .catch(error => {
                console.log(error);
            })
    }







  return (
    <div>
      <div className="bg-fuchsia-600">
      <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center w-full py-16">
        <h2 className="text-4xl mb-6 font-bold">Register</h2>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                required
                name="photo_url"
              />
            </div>
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
              <label className="label">
                <Link to="/login">Already have an account? <span className="text-blue-600 font-semibold">Login</span></Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-fuchsia-500 text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
