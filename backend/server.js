import express from 'express';
import userRoutes from './routes/user.route.js';


const app= express();

app.get("/", (req,res)=>{
    res.send("API is running")
})

app.use("/api/users",userRoutes)

app.listen(5000, ()=>{
    console.log("server started on the port 5000")
})