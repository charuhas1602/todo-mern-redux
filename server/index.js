import express from 'express'
import connection from './Databade/db.js'
const app = express();

const PORT = 8000
connection()
app.listen(PORT, () => {
    console.log("Server is running ✅ on PORT-", PORT)
})