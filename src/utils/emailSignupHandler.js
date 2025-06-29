// utils/emailSignupHandler.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import createDoc from "./createDoc";
import { auth } from "../firebase";

const emailSignupHandler = async ({
    name,
    email,
    phone,
    password,
    confirmPassword,
    setLoading,
    resetFields,
    navigate
}) => {
    setLoading(true);
    if (!name || !email || !phone || !password || !confirmPassword) {
        
        toast.error("Please fill all the fields");
        setLoading(false);
        return;
    }

    if (password !== confirmPassword) {
        
        toast.error("Passwords do not match");
        setLoading(false);
        return;
    }

    try {
        // const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // const user = userCredential.user;
        // console.log("user", user);
        // toast.success("User Created Successfully");
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user", user);
                toast.success("User Created Successfully");
                setLoading(false);
                createDoc(user, { name });
                navigate('/dashboard');
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);
                setLoading(false);
                // ..
            });

        resetFields();
        // createDoc(user);
    } catch (error) {
        console.error("Signup error", error);
        toast.error(error.message);
        setLoading(false);
    } 
    // finally {
    //     setLoading(false);
    // }
};

export default emailSignupHandler;
