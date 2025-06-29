// This code if from LoginRegister.jsx file

// const createDoc = (user) => {
    //     //Make sure Doc with userId is not already created
    //     //Create a Document in Firestore
    // }
    // const emailSignupHandler = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     // console.log(e);
    //     if (name === '' || email === '' || phone === '' || password === '' || confirmPassword === '') {
    //         // alert("Please fill all the fields");
    //         setLoading(false);
    //         toast.error("Please fill all the fields");
    //         // return;
    //     } else if (password !== confirmPassword) {
    //         // alert("Passwords do not match");
    //         setLoading(false);
    //         toast.error("Passwords do not match");
    //         // return;
    //     } else {
    //         //Authentication logic can be added here
    //         // const auth = getAuth();
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 // Signed up 
    //                 const user = userCredential.user;
    //                 console.log("user", user);
    //                 toast.success("User Created Successfully");
    //                 setLoading(false);
    //                 setName('');
    //                 setEmail('');
    //                 setPhone('');
    //                 setPassword('');
    //                 setConfirmPassword('');
    //                 //Create a user document in Firestore
    //                 createDoc(user);
    //             })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 console.log("errorCode", errorCode);
    //                 const errorMessage = error.message;
    //                 console.log("errorMessage", errorMessage);
    //                 setLoading(false);
    //                 toast.error(errorMessage);
    //                 // ..
    //             });
    //         // console.log("Email Signup Successful");
    //     }
    // };

    // const googleSignupHandler = (e) => {
    //     e.preventDefault();
    //     // console.log(e);
    // }



    
// This code is from LoginRegister.css file
/* .btn_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn{
    background-color: var(--theme);
    width: 80%;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.2s;
    color: white;
    opacity: 0.8;
    border: none;
}

.btn:hover {
    opacity: 1;
} */
