
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from './SocialLogin';

const Login = () => {

    const{ signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Ok!',
                    'User Log in Successfully!',
                    'success'
                )
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
              });
    }
    return (
        <div>
            <form onSubmit={handleLogin} className="w-1/2 mx-auto my-20 p-10 border border-sky-500 bg-white rounded-lg text-black">
                <h3 className='text-5xl text-sky-500 text-center font-bold mb-5'>Login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link className="underline text-error">Forgot password?</Link>
                    </label>
                </div>
                <div className="form-control">
                    <label className="flex gap-4 cursor-pointer mt-4">
                        <input type="checkbox" className="checkbox" />
                        <span className="label-text">Remember me</span>
                    </label>
                </div>
                <div className="form-control mt-6 mb-3">
                    <button className="btn bg-sky-500">Login</button>
                </div>
                <p className='text-center'>Dont have an account? <Link to="/signUp" className='text-sky-500 underline'>Create an account</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;