
interface IVoting {
    dogLinks: string[],
    addVoteAndRefresh: Function,
    getBreedNames: Function,
    formatBreedNames: Function
}

const Voting = ({dogLinks, addVoteAndRefresh, getBreedNames, formatBreedNames}: IVoting) => {

    let linkName = getBreedNames();

    let formattedNames: string[] = [];
    for (const name in linkName) {
        let result = formatBreedNames(linkName[name]);
        formattedNames.push(result)
    }

    return (
        <div>
            <img src={dogLinks[0]} alt={`${formattedNames[0]}`} width="500" height="600"></img>
            <button value={`${linkName[0]}`} onClick={(e) => addVoteAndRefresh(e)}>{formattedNames[0]}</button>
            <img src={dogLinks[1]} alt={`${formattedNames[1]}`} width="500" height="600"></img>
            <button value={`${linkName[1]}`} onClick={(e) => addVoteAndRefresh(e)}>{formattedNames[1]}</button>
        </div>
    )
};

export default Voting;