import { useContext } from 'react';
import { AuthContext } from './authProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='w-full h-[100vh] flex justify-center items-center'><span className="loading loading-infinity loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}