import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'
import { AuthContext } from './AuthContext'
import { useEffect, useState } from 'react'


const AuthProvider = ( { children } ) => {

    const [ user, setUser ] = useState( null )
    const [ loading, setLoading ] = useState( true )

    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword( auth, email, password )

    }
    const signInUser = ( email, password ) => {
        return signInWithEmailAndPassword( auth, email, password )
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            setUser( currentUser )
            setLoading( false )
        } )

        return () => {
            unSubscribe()
        }
    }, [] )
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider
