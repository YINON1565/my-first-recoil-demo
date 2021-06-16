import { useRecoilValue } from 'recoil';
import { GameScore } from '../atoms';
const Gems = () => {
    const scroe = useRecoilValue(GameScore);

    return (
        <div>
            {
                [...Array(scroe)].map((n, i)=> {
                    return  <span key={i}>💎</span>
                })
            }
        </div>
    )
}

export default Gems;