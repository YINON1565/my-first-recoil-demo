import { useRecoilState, useRecoilValue } from 'recoil';
import { GameScore } from '../atoms';
import { paperSize } from '../selectors';

const Game = () => {
    const [scroe, setScore] = useRecoilState(GameScore);
    const paperClick = () => {
        setScore(scroe + 1)
    }
    const size = useRecoilValue(paperSize)

    return (
        <button style={{ fontSize: size }} onClick={paperClick}>
            🎈
        </button>
    )
}

export default Game;