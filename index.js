const express = require('express')

const app = express()
const webRoutes = require('./src/core/routes/web.route.js')

const engine = require('express-edge')
const path = require('path')

const port = 3000


app.use(engine);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'edge');

app.use('/static',express.static(path.join(__dirname, 'public')))
app.use(webRoutes)


app.listen(port , () => {
    console.log("application lancée")
})