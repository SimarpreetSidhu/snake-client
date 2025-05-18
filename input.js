const connect = require("./client");
const { MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY,
  QUIT_KEY,
  SEND_MSG_KEY } = require("./constants");
let conn = connect();

const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",handleUserInput);
  return stdin;
};

const handleUserInput = function(key,msg) {
  if (key === QUIT_KEY) {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    conn.write(`Move: up`);
  } else if (key === MOVE_LEFT_KEY) {
    conn.write(`Move: left`);
  } else if (key === MOVE_DOWN_KEY) {
    conn.write(`Move: down`);
  } else if (key === MOVE_RIGHT_KEY) {
    conn.write(`Move: right`);
  } else if (key === SEND_MSG_KEY) {
    conn.write(`Say: ${msg}`);
  }
};

module.exports = {setUpInput,handleUserInput};