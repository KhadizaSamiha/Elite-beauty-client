import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SocialLogin = () => {
    const [axiosSecure] = useAxiosSecure();
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // console.log(from);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                console.log(saveUser);
                fetch('https://ass12-server-one.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    return (
        <div>
            <div className='divider'></div>
            <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline bg-pink-600 border-0 text-white'><FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;