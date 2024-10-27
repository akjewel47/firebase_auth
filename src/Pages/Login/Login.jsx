import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

const {signIn} = useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()


    const handleLogin = e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
       console.log(email, password)
       signIn(email , password)
       .then(result =>{
        console.log(result.user)
        
        // naivgate after login
        navigate(location?.state ? location.state: '/')

       })
       .catch (error =>{
        console.error(error)
       })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl font-bold my-10 text-center">Please Login</h2>


                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input 
                                name="email"
                                type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                name="password"
                                type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4 mb-4">Don't have an Account <Link to='/register' className="text-blue-500 font-bold">Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;