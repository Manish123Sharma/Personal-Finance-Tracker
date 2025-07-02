// utils/googleSignupHandler.js
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, provider } from "../firebase";
import createDoc from "./createDoc";

const googleSignupHandler = async ({ setLoading, navigate }) => {
    // e.preventDefault();
    setLoading(true);
    try {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(`Token: ${token}`);

                // The signed-in user info.
                const users = result.user;
                console.log('Users:', users);
                setLoading(false);
                navigate('/dashboard');
                createDoc(users);
                toast.success("User Created Successfully with Google");
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error: ${errorMessage}`);
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(`Email: ${email}`);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(credential);
                setLoading(false);
                toast.error(errorMessage);
                // ...
            });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        setLoading(false);
        toast.error(error.message);
    }

};

export default googleSignupHandler;
