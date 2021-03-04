import styles from '..//styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className = {styles.profileContainer}>
            <img src="https://thomasfrankliyn.github.io/assets/img/Capa.jpg" alt="Thomas"/>

            <div>
               <strong>Thomas Frankliyn</strong>
               <p>
                   <img src="icons/level.svg" alt="Level"/>
                   Level 1
                   
                </p>
            </div>
        </div>

    );
}