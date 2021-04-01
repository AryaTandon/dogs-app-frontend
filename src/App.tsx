import { useEffect, useState } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard'
import Voting from './components/Voting'


function App() {

  const [dogs, setDogs] = useState<string[]>();

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
      await fetch('http://localhost:4000/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({chosenBreed})
      });
    } catch (err) {
      console.error(err.message);
    }
    fetchTwoRandomDogs();
  }

  useEffect(() => {
    fetchTwoRandomDogs();
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
        {/* <Leaderboard
        /> */}
    </div>
  );
}

export default App;
