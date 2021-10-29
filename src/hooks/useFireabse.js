import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, getAuth, signInWithPopup, signOut } from "firebase/auth";
import initilizeAuthentication from "../components/Firebase/Firebase.init";


initilizeAuthentication()


const useFireabse = () => {
      const [user, setUser] = useState({})
      const [error, setError] = useState('')

      const provider = new GoogleAuthProvider();
      const auth = getAuth()

      const signInWithGoogle = () => {
            signInWithPopup(auth, provider)
                  .then(result => {
                        setUser(result.user)

                  })
                  .catch(error => {
                        setError(error.messeage)
                  })
      }


      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user)
                  }
                  else {
                        setUser({})
                  }
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
            googleSignOut
      }

}
export default useFireabse;