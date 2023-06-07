import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // console.log(from);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
               navigate('/')
            })
    }
    return (
        <div>
            <div className='divider'></div>
            <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;