import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';

export function Profile(){

    const {level} = useContext(ChallengesContext);

    return(
        <ProfileContainer>
            <img src="https://github.com/LMaroto.png" alt="Lucas Maroto" />
            <div>
                <strong>Lucas Maroto</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    );
}