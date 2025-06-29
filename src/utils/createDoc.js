// utils/createDoc.js

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const createDoc = async (user, {name}) => {
    console.log("Creating document for user:", user);
    // Example:
    // const docRef = doc(db, "users", user.uid);
    // await setDoc(docRef, { ...userData });
    if (!user) return;
    const userRef = doc(db, 'users', user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()) {
        try {
            await setDoc(doc(db, 'users', user.uid), {
                name: user.displayName ? user.displayName : name,
                email: user.email,
                photoURL: user.photoURL ? user.photoURL : '',
                createdAt: new Date(),
            });
            toast.success("User document created successfully");
        } catch (error) {
            console.error("Error creating document:", error);
            toast.error(error.message);
        }
    } else {
        toast.error("Doc already exists");
    }
};

export default createDoc;
