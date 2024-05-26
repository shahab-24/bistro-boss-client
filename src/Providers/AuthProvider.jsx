import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../useMenu/useAxiosPublic/useAxiosPublic";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()

  const createUser = ( email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = ( email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }


    const updateUserProfile = (name, photo) => {
     return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        if(currentUser) {
          const userInfo = {email: currentUser.email};
            axiosPublic.post('/jwt',userInfo)
            .then(res => {
              if(res.data.token){
                localStorage.setItem('access-token', res.data.token);
              }

            })

        } else{
          localStorage.removeItem('access-token');

        }
        console.log(setUser);
        setLoading(false)
      })
      return () => {
        return unsubscribe()
      }
    },[])


  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn, 
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
