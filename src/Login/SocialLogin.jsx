
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'ok!',
                    'Sign In Successfully!',
                    'success'
                  )
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div>
                <div className="divider">OR</div>
                <div className="text-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline bg-cyan-300">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;