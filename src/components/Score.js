import { useRecoilValue } from 'recoil';
import { GameScore, useResetScore } from '../atoms';
const Score = () => {
    const scroe = useRecoilValue(GameScore);
    const resetScore = useResetScore()
    return (
        <div>
            <button onClick={resetScore}>Reset</button>
            Score : {scroe}
        </div>
    )
}

export default Score;