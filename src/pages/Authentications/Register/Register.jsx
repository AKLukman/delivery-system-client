import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = ( data ) => console.log( data )
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
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>


    )
}

export default Register
