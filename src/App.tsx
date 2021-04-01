import { useEffect, useState } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard'
import Voting from './components/Voting'

export interface IDog {
  breed: string,
  vote_count: number
}

function App() {

  const [dogs, setDogs] = useState<string[]>();
  const [list, setList] = useState<IDog[]>();
  const [topDogs, setTopDogs] = useState<string[]>([])
  const fetchTwoRandomDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random/2').then(
      async response => {
        let jsonResponse = await response.json();
        setDogs(jsonResponse.message);
        console.log(dogs);
      }
    )
  }

  const addVoteAndRefresh = async (e: any) => {
    try {
      const chosenBreed = e.target.value;
      await fetch('https://amos-dog-backend.herokuapp.com/votes', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({chosenBreed})
      });
      fetchTwoRandomDogs();
    } catch (err) {
      console.error(err.message);
    } 
  }

  const getAllDogs = async() => {
    try {
      const response = await fetch('https://amos-dog-backend.herokuapp.com/');
      const myList = await response.json()
      setList(myList);

      let myClone = []
      for (let n = 0; n<3; n++) {
        const res = await fetch(`https://dog.ceo/api/breed/${myList![n].breed}/images/random`)
        let jsonResponse = await res.json();
        myClone.push(jsonResponse.message);
      }
      setTopDogs([...myClone])
    } catch (err) {
      console.error(err.message);
    } 
  }

  useEffect(() => {
    fetchTwoRandomDogs();
    getAllDogs();
  }, [])

  return (
    <div className="App">
      {dogs ?
        <Voting 
        dogLinks = {dogs}
        addVoteAndRefresh = {addVoteAndRefresh}
        />
      : <></>
      }
      {list ? 
        <Leaderboard 
        getAllDogs={getAllDogs}
        dogLeaderboard={list}
        topDogs = {topDogs}
      />
      : <></>
      }
    </div>
  );
}

export default App;
