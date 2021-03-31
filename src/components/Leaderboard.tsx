import {IDog} from '../App'

interface ILeaderboard {
    getAllDogs: Function,
    dogLeaderboard: IDog[]
}

const Leaderboard = ({getAllDogs, dogLeaderboard}: ILeaderboard) => {
    
    return(
    <div>
        <button onClick={() => getAllDogs()}> REFRESH</button>
       <ul>
           {dogLeaderboard.map((dog) => <li> {dog.breed} : {dog.vote_count}</li>)}
       </ul>
    </div>
    )
};

export default Leaderboard;