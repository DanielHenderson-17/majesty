const { database } = require("./data")
const { createQueen, hailTheQueen, payTribute } = require("./functions")


//Add queens to queens array
createQueen(1, "Trinity Terry")
createQueen(2, "Julieann Henderson")
createQueen(3, "Jaylee West")
createQueen(4, "Angela Smith")
createQueen(5, "Rachel Smith")


//Add tributes to tributeChest array
payTribute(1, "Bag of gold", 2)
payTribute(2, "my time", 1)
payTribute(3, "my allegiance", 3)
payTribute(4, "more subjects", 1)


// Iterate over each queen object in the queens array within the database object
for (const queen of database.queens) {
    // Use the find method to search the tributeChest array for an object whose queenId matches the current queen's id
    const tribute = database.tributeChest.find(t => t.queenId === queen.id);  
    // Check if a tribute object was found (i.e., if the queen has received a tribute)
    if (tribute) {
        // Print a message indicating that the current queen has received a tribute, including the description of the tribute
        console.log(`Queen ${queen.name} has received tribute of ${tribute.description}.`);
    }
}


