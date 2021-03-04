import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const { currentExperience, experienceToNexteLevel } = useContext(challengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNexteLevel;

    return(
        <header className = {styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}/>

                <span className= {styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                {currentExperience} xp
                    </span>
            </div>
            <span>{experienceToNexteLevel} xp</span>
        </header>
    );
}