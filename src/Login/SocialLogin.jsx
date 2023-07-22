
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <div className="divider">OR</div>
                <div className="text-center">
                    <button className="btn btn-circle btn-outline bg-cyan-300">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;