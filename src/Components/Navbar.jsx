
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";



const Navbar = () => {

    const navigate = useNavigate()
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Ok!',
                    'User Logged Out Successfully!',
                    'success'
                )
                navigate('/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allCollages">Collages</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/myCollages">My Collage</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold">FindCollage</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allCollages">Collages</Link></li>
                    <li><Link to="/admission">Admission</Link></li>
                    <li><Link to="/myCollages">My Collage</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {user?.email ? <>
                    <li className="font-bold text-sky-500 px-4"><Link to="/profile">{user?.displayName}</Link></li>
                    <li className="font-bold text-white btn btn-info px-4"><button onClick={handleLogOut}>Log out</button></li>


                </>
                    : <li className="font-bold text-white btn btn-info"> <Link to="/login">Login</Link> </li>
                }
            </div>
        </div>
    );
};

export default Navbar;