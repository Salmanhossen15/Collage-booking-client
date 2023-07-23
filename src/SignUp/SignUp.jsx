
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import SocialLogin from "../Login/SocialLogin";



const SignUp = () => {

    const{createUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        
        const password = form.password.value;
        console.log(name, email, password,)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
                Swal.fire(
                    'Ok!',
                    'Created Account Successfully!',
                    'success'
                )
                navigate("/")
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <form onSubmit={handleSignUp} className="w-1/2 mx-auto  mt-32 mb-24 p-10 border border-sky-500 bg-white rounded-lg text-black">
                <h3 className='text-4xl text-sky-500 text-center font-bold mb-5'>Create an account</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-full" required />
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" required />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="flex gap-4 cursor-pointer mt-4">
                        <input type="checkbox" className="checkbox" required />
                        <span className="label-text">Accept terms & conditions</span>
                    </label>
                </div>
                <div className="form-control mt-6 mb-3">
                    <button className="btn bg-sky-600">Create an account</button>
                </div>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-sky-500 underline'>Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default SignUp;