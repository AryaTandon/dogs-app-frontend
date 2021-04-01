import {IDog} from '../App'
import './components.css';

interface ILeaderboard {
    getAllDogs: Function,
    dogLeaderboard: IDog[],
    topDogs: string[],
    formatBreedNames: Function
}

const Leaderboard = ({getAllDogs, dogLeaderboard, topDogs, formatBreedNames}: ILeaderboard) => {
    console.log(topDogs)

    let formattedNames: string[] = [];
    for (let n = 0; n<3; n++) {
        let result = formatBreedNames(dogLeaderboard[n].breed);
        formattedNames.push(result)
    }

    return(
    <div>
        <button onClick={() => getAllDogs()}> REFRESH</button>
        <div className="leaderboard-container">
        <div className="voting-list">
       <ul>
           {dogLeaderboard.map((dog, idx) => <li key={idx}> {dog.breed} : {dog.vote_count}</li>)}
       </ul>
       </div>
       <div className="top-three">
           {topDogs.map((link, idx) => {
           return (
           <div>
            <img key={idx} src={link} alt='' width="500" height="600"></img>
            <h3> {formattedNames[idx]} </h3>
           </div>
           )
           })}
       </div>
        </div>
        
    </div>
    )
};

export default Leaderboard;