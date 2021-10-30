import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../firebase/firebase.init';


initializeAuthentication();


const Login = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { signInWithGoogle } = useAuth();

    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    const handleNameChange = e => {
        setName(e.target.value);
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleRegistration = event => {
        event.preventDefault();
        // console.log(email, password);

        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogin) {
            signInWithEmail(email, password);
        }
        else {
            newRegistration(email, password);
        }
    };
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }


    const newRegistration = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(userCredential.user);
                setError('');
                setUserName();
                history.push(redirect_uri);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // setUser(userCredential.user);
                // console.log(userCredential.user);
                setError('');
                // verifyEmail();
                setUserName();
                history.push(redirect_uri);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    return (
        <div className="m-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary text-center m-5">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" required id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlhtmlFor="inputEmail3" className="col-sm-2 col-form-label" >Email</label>
                    <div className="col-sm-10">
                        <input type="email" placeholder="Enter Your Email" onBlur={handleEmailChange} className="form-control" required id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" >Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} required placeholder="Enter Your Password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" onChange={toggleLogin} type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}
                </button>

            </form>
            <button className="btn btn-primary my-4" onClick={handleGoogleLogin}>Google Sign-In</button>
        </div>
    );
};

export default Login;