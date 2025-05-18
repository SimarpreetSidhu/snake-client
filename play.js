const { setUpInput } = require("./input");

console.log(`Connecting`);
const message = process.argv.slice(2)[0];

setUpInput(message);