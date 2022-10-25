import { FaGithub, FaGoogle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import {Session} from 'next-auth'
import styles from "./styles.module.scss";

export function SigInGoogleButton() {
  const { data: session } = useSession()

    return session ? (
    <button
    type= "button" 
    className={styles.SigInGoogleButton} 
    onClick = {()=> signOut}
    >
      
          {session.user.email}
      <FiX color="#737380" className={styles.CloseIcon} />
    </button>
  ) : (
    <button
      className={styles.SigInGoogleButton}
      type="button"
      onClick={() => signIn("google",{redirect: false,
       } )}
    >
        <FaGoogle color="#db4a39"/>     
        Sing in With Google
    </button>
  );
}
