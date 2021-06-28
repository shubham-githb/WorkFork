import React from "react"
import "./Login.css"
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"
import { Button } from "@material-ui/core"

function Login() {
	const [state, dispatch] = useStateValue()

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) =>
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				})
			)
			.catch((error) => alert(error.message))
	}


    return (
        <div className="login">
        
            <div className="login__container">
                <img src="" 

                />
                <h1>(TEST-DEPLOYMENT) WORKFORK</h1>
                <h1>Sign In to WorkFork</h1>
                <p> WorkFork is a messaging app for business that connects people to the information they need.</p>
                <Button onClick={signIn}>Sign In with Google</Button>
                {/* <Button  className="dev__buton" href="http://shubhaaam.s3-website.us-east-2.amazonaws.com/">Reach Developer</Button> */}

            </div>
        </div>
    )
}

export default Login
