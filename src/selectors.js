import { selector } from "recoil";

import { GameScore } from "./atoms";

const paperSize = selector({
    key: 'paperSize',
    get: ({get})=> {
        const score = get(GameScore)
        return 100 + (score * 5)
    }
})

const fetchHighScore = async ()=> {
return new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve(303)
    }, 1000);
})
}

const highScores = selector({
    key: 'highScore',
    get: async ({get})=> {
        return await fetchHighScore()
    }
})

export {paperSize, highScores}