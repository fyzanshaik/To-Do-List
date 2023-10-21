import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/work",(req,res)=>{
    res.render("work.ejs")
})

app.listen(port, () => {
    console.log(`Server has started at http://localhost:${port}`);
});
