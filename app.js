const express = require('express');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const port = process.env.port;
const ProductRouter = express.Router();
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

ProductRouter.route("/").get((req, res) => {
    res.send("hello word from products")
})
ProductRouter.route("/1").get((req, res) => {
    res.send("hello word from products 1")
})
app.use("/products", ProductRouter)
app.get("/", (req, res) => {
    
    res.render('index', { username: 'naverdie', customer: ['kongjai', 'mali', 'bounmee'] });

})


app.listen(port, () => {
    debug('listening this port %d', port);
})