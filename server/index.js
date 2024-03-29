const http= require( "http")
const express= require( "express" );
const cors=require( "cors" );
const socketIo=require( "socket.io" );

const app = express();
const server=http.createServer(app);
const io=socketIo(server);
const port=4500 || process.env.PORT;

app.use(cors());
app.get("/", (req, res)=>{
        res.send("ITS Working")
})
io.on("connection", (socket) => {
    console.log("Client connected");
    // socket.on("message", (data) => {
    //     console.log("Message from client:", data);
    //     // Handle the message or broadcast it to other clients
    // });
   
});

server.listen(port, ()=>{
        console.log("server listening on port: " + port);
});