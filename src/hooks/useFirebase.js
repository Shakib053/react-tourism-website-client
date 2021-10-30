import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();



    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     setUser(result.user);
        // }).catch((error) => {
        //     setError(error.message)
        // });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }
            setLoading(false);
        });
    }, [])
    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setLoading(false))
    }


    return {
        signInWithGoogle,
        user,
        error,
        loading,
        logOut
    }

};

export default useFirebase;