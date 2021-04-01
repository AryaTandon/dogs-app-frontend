import {IDog} from '../App'

interface ILeaderboard {
    getAllDogs: Function,
    dogLeaderboard: IDog[],
    topDogs: string[]
}

const Leaderboard = ({getAllDogs, dogLeaderboard, topDogs}: ILeaderboard) => {
    console.log(topDogs)
    return(
    <div>
        <button onClick={() => getAllDogs()}> REFRESH</button>
        <div>
       <ul>
           {dogLeaderboard.map((dog, idx) => <li key={idx}> {dog.breed} : {dog.vote_count}</li>)}
       </ul>
       </div>
       <div>

           {topDogs.map((link, idx) => <img key={idx} src={link} alt='' width="500" height="600"></img>)}
       </div>
    </div>
    )
};

export default Leaderboard;