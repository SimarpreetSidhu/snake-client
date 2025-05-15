const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host:"localhost",
    port:50541
  });

  conn.setEncoding("utf8");

  conn.on("connect",()=>{
    console.log(`Successfully connected to game server`);
    conn.write(`Name: SKS`);
    conn.write(`Move: up`);
  });
  
  conn.on("data",(data)=>{
    console.log(`Data for player:`, data);
  });

  return conn;
};
module.exports = connect;