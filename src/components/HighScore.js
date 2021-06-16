import { useRecoilValue } from 'recoil';
import { highScores } from '../selectors';
const HighScore = () => {
    const highScore = useRecoilValue(highScores);
    return (
        <div>
            High Score : {highScore}
        </div>
    )
}

export default HighScore;