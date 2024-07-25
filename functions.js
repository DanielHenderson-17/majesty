const { queens, tributeChest } = require("./data");

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Magesty, ${nameString}.`
}

const payTribute = (tributeId, tributeDescription, queenId) => {
    // Create a tribute object
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId
    }
    // Add the tribute object to the tribute chest
    tributeChest.push(tributeObject)
}

module.exports = {createQueen, hailTheQueen, payTribute}