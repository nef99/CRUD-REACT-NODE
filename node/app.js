import express from "express";
import cors from "cors"
import db from "./database/db.js";
import blogRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)
app.get('/', (req, res)=>{
    res.send("hola mundo")
})

try {
    await db.authenticate()
    console.log("conexion exitosaas a base de datos")
} catch (error) {
    console.log(`el error de conexion esss: ${error}`)
}



app.listen(8000, ()=>{
    console.log("server running port")
})