import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'
import { Link, useLocation, useNavigate } from 'react-router'
import SocialLogin from '../SocialLogin/SocialLogin'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { createUser } = useAuth()
    const location = useLocation();
    const from = location.state?.from || "/";
    const navigate = useNavigate();
    const onSubmit = ( data ) => {
        createUser( data.email, data.password )
            .then( result => {
                console.log( result.user )
                navigate( from )
            } )
            .catch( error => {
                console.error( error )
            } )
    }
    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <div className="card-body">
                <h2 className="text-3xl font-bold">Create an account</h2>
                <form onSubmit={handleSubmit( onSubmit )}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register( "email", { required: true } )} className="input" placeholder="Email" />
                        {errors?.email && <p role="alert" className="text-red-700" >Email is required</p>}
                        <label className="label">Password</label>
                        <input type="password" {...register( "password", { required: true, minLength: 6 } )} className="input" placeholder="Password" />
                        {
                            errors.password?.type === "required" && <p className="text-red-700">Password is required</p>
                        }
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-700">Password must be at least 6 characters or longer</p>
                        )}

                        <button type='submit' className="btn  mt-4 bg-primary uppercase font-bold">Register</button>
                    </fieldset>
                    <p><small>Already have an account?</small><Link className="text-blue-700 font-extrabold" to="/login">Login</Link></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>


    )
}

export default Register
