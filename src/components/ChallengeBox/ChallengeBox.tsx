import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css';
import { ChallengeActive, ChallengeFailedButton, ChallengeSucceededButton, Container } from './styles';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <Container>
        {
            activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <ChallengeFailedButton 
                        type="button"
                        onClick={handleChallengeFailed}>
                            Falhei
                        </ChallengeFailedButton>
                        
                        <ChallengeSucceededButton
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded}>
                        Completei
                        </ChallengeSucceededButton>
                    </footer>
                </ChallengeActive>
            ) : (
        
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}

        </Container>
    )
}