const { tributeChest, queens } = require("./data")
const { createQueen, hailTheQueen, payTribute } =require("./functions")


createQueen(1, "Trinity Terry")
createQueen(2, "Julieann Henderson")
createQueen(3, "Jaylee West")
createQueen(4, "Angela Smith")
createQueen(5, "Rachel Smith")

payTribute(1, "Bag of gold", 2)
payTribute(2, "my time", 1)
payTribute(3, "my allegiance", 3)
payTribute(4, "more subjects", 1)


for (const queen of queens) {
    for (const tribute of tributeChest) {
        if (queen.id === tribute.queenId) {
            console.log(`Queen ${queen.name} has received tribute of ${tribute.description}.`)
        }
    }
}