import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';


function Login() {

    const [state,dispatch] = useStateValue()
    const login = ()=>{
        auth.signInWithPopup(provider).
        then(result=>{
            dispatch({
                type:actionType.SET_USER,
                user:result.user
            })

        }).catch(error=>{
            alert(error.message)
        })
    }
    return (
        
        <div className="login">

            <div className="login_logo">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" 
                />  

                <img 
                src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-700x394.png" 
                />
            </div>

            <button onClick={login} >
                Login
            </button>
            
        </div>
    )
}

export default Login
