const http= require( "http")
const express= require( "express" );
const cors=require( "cors" );
const socketIo=require( "socket.io" );

const app = express();
const port=4500 || process.env.PORT;

app.get("/", (req, res)=>{
        res.send("ITS Working")
})

const server=http.createServer(app);
const io=socketIo(server);
io.on("connection", ()=>{
    console.log("Connection established");
})
server.listen(port, ()=>{
        console.log("server listening on port: " + port);
});