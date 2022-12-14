const express = require("express");
const app = express();

const cors = require('cors')
const routes = require("./routes");
const initDatabase = require("./config/database");
const environment = require('./environment')
const { authMiddleware } = require("./middlewares/authMiddleware");

app.use(cors({credentials: true, origin: 'http://localhost:4200', allowHeaders: ['Content-Type, X-Authorization']}))
app.use(express.json());
app.use(authMiddleware);
app.use(routes)
initDatabase()
.then(() => {
    app.listen(environment.PORT, () => console.log(`Server listening on http://localhost:${environment.PORT}`))
})
.catch((err) => console.log(err));


