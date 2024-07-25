const { database } = require("./data");

//Create queen by bassing in the queenId and queenName from the createQueen function being called in the main.js
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }
    // Add the queen object to the queen array
    database.queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}


//Create tribute with queen id by passing in tributeId, tributeDescription, and queenID from the payTribute function being called in the main.js
const payTribute = (tributeId, tributeDescription, queenId) => {
    // Create a tribute object
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }
    // Add the tribute object to the tributeChest array
    database.tributeChest.push(tributeObject)
}

module.exports = { createQueen, hailTheQueen, payTribute }
