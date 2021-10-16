import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentic from "./Firebse.inite";
initializationAuthentic()
const useFireBase=()=>{
    const [user,setUser]=useState({})
    
const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const handelEmail=e=>{
setEmail(e.target.value);
}
const handelPassword=e=>{
    setPassword(e.target.value);
}
const HandelRegistration=e=>{
console.log(email,password);
createUserWithEmailAndPassword(auth, email, password)
.then((result) => {
    console.log(result.user);
  })
e.preventDefault()
}
const GoogleSignIn=()=>{
    signInWithPopup(auth, GoogleProvider)
    .then(result=>{
        setUser(result.user)
    })

}
const logOut=()=>{
    signOut(auth)
    .then(() => {
        setUser({})
      })
}
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        } 
      });
},[])
return{
    user,
    GoogleSignIn,
    logOut,
    handelEmail,
    handelPassword,
    HandelRegistration
}
}
export default useFireBase;