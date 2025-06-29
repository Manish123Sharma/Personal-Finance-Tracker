import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import createDoc from "./createDoc";

const emailLoginHandler = async ({
    email,
    password,
    setLoading,
    resetFields,
    navigate
}) => {
    setLoading(true);
    if (email === '' || password === '') {
        
        toast.error("Please fill all the fields");
        setLoading(false);
        // return;
    } else {
        try {
            setLoading(true);
            // const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user", user);
                    toast.success("User Logged In Successfully");
                    setLoading(false);
                    createDoc(user);
                    navigate('/dashboard');
                    // ...
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage);
                });
            resetFields();
        } catch (error) {
            console.error("Signup error", error);
            toast.error(error.message);
            setLoading(false);
        } 
        // finally {
        //     setLoading(false);
        // }
    }

};

export default emailLoginHandler;