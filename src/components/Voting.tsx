
interface IDogs {
    dogLinks: string[];
    addVoteAndRefresh: Function;
}

const Voting = ({dogLinks, addVoteAndRefresh}: IDogs) => {

    let formattedName: string[] = [];
    for (const dog in dogLinks) {
        const dogName = dogLinks[dog].split('/')[4];
        console.log(dogName);
        if (dogName.includes("-")) {
            const betterName = dogName.split('-')
                                      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                                      .reverse()
                                      .join(' ');
            formattedName.push(betterName);
        } else {
            const betterName = dogName[0].toUpperCase() + dogName.substr(1).toLowerCase();
            formattedName.push(betterName);
        }
    }

    return (
        <div>
            <img src={dogLinks[0]} alt={`${formattedName[0]}`} width="500" height="600"></img>
            <button value="" onClick={(e) => addVoteAndRefresh(e)}>{formattedName[0]}</button>
            <img src={dogLinks[1]} alt={`${formattedName[1]}`} width="500" height="600"></img>
            <button value="" onClick={() => addVoteAndRefresh()}>{formattedName[1]}</button>
        </div>
    )
};

export default Voting;