const tributeChest = []

const queens = []

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

createQueen(1, "Trinity Terry")
createQueen(2, "Julieann Henderson")
createQueen(3, "Jaylee West")
createQueen(4, "Angela Smith")
createQueen(5, "Rachel Smith")

// for (const queen of queens) {

//     const hailMessage = hailTheQueen(queen.name)
//     console.log(hailMessage)

// }

payTribute(1, "Bag of gold", 2)
payTribute(2, "my time", 1)
payTribute(3, "my allegiance", 3)
payTribute(4, "more subjects", 1)


for (const queen of queens) {

    // const hailMessage = hailTheQueen(queen.name)
    // console.log(hailMessage)

    for (const tribute of tributeChest) {
        if (queen.id === tribute.queenId) {
            console.log(`Queen ${queen.name} has received tribute of ${tribute.description}.`)
        }
    }
}