import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/authProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user.photo_url);

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-10">Your Profile</h2>
      <div className="p-8 rounded-md shadow flex flex-col items-center space-y-4">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user.photo_url} />
          </div>
        </div>
        <div className="text-center w-full border-2 p-4">
          <h2>{`Name: ${user.name}` }</h2>
          <h2>{`email: ${user.email}`}</h2>
        </div>
        <div>
          <Link className="bg-fuchsia-400 py-2 px-4 rounded-xl text-white" to="/">Go Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
