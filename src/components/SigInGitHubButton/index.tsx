import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import {Session} from 'next-auth'
import styles from "./styles.module.scss";

export function SigInButton() {
  const { data: session } = useSession()

    return session ? (
    <button
    type= "button" 
    className={styles.SigInButton} 
    onClick = {()=> signOut}
    >
      <FaGithub color= "#04d361" />
          {session.user.email}
      <FiX color="#737380" className={styles.CloseIcon} />
    </button>
  ) : (
    <button
      className={styles.SigInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sing in With GitHub
    </button>
  );
}
