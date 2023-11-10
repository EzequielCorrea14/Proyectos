import server from "./server/server.js";

const PORT = 8080;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));


//primero se hace el npm init -y
//segundo se hace el npm install express
//tercero se hace el npm install -D nodemon 
//cuarto se agrega en el package "dev": "nodemon src/server.js en la parte script
//quinto se hace el npm run dev