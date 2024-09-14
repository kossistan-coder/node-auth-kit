import express from "express";

const app = express()
import { webRoutes } from "./src/core/routes/web.route";
import { engine } from 'edge.js';
const port = 3000


app.engine('edge', engine);
app.set('views', './views');
app.set('view engine', 'edge');

app.use(express.static(path.join(__dirname, 'public')))
app.use(webRoutes)


app.listen(port , () => {
    console.log("application lancée")
})