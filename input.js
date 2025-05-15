const connect = require("./client");
let conn = connect();

const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "\u0077") {
    conn.write(`Move: up`);
  } else if (key === "\u0061") {
    conn.write(`Move: left`);
  } else if (key === "\u0073") {
    conn.write(`Move: down`);
  } else if (key === "\u0064") {
    conn.write(`Move: right`);
  } else if (key === "\u006d") { // if key is m , send message
    conn.write(`Say: Goo`);
  }
};

module.exports = {setUpInput,handleUserInput};