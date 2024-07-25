const { database } = require("./data");

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    database.queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

const payTribute = (tributeId, tributeDescription, queenId) => {
    // Create a tribute object
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }
    // Add the tribute object to the tribute chest
    database.tributeChest.push(tributeObject)
}

module.exports = { createQueen, hailTheQueen, payTribute }
