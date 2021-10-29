import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, getAuth, signInWithPopup, signOut } from "firebase/auth";
import initilizeAuthentication from "../components/Firebase/Firebase.init";


initilizeAuthentication()


const useFireabse = () => {
      const [user, setUser] = useState({})
      const [error, setError] = useState('')
      const [isloading, setIsloading] = useState(true)

      const provider = new GoogleAuthProvider();
      const auth = getAuth()

      const signInWithGoogle = () => {
            return signInWithPopup(auth, provider)

      }


      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user)
                  }
                  else {
                        setUser({})
                  }
                  setIsloading(false)
            })
      }, [])

      const googleSignOut = () => {
            signOut(auth)
                  .then(() => {
                        setUser({})
                  })
                  .catch(error => {
                        setError(error.messeage)
                  })
      }
      return {
            user,
            error,
            signInWithGoogle,
            googleSignOut,
            isloading
      }

}
export default useFireabse;