import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import styles from './styles.module.scss'

export function SigInButton(){
    const isUserLoggedIn = true
   
    return isUserLoggedIn ? (
        <button 
        className={styles.SigInButton}
            type= "button"
        >
           
           

           
            Jorge Barros 
            <FiX color= "#737380" className={styles.CloseIcon}/>          
        </button>

    ) :(
        <button 
        className={styles.SigInButton}
            type= "button"
        >
           
            <FaGithub color="#eba417"/>
            Sing in With GitHub
           
        </button>

    );


}