const express = require('express');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
const port = 3000;

require("./db/sequelizeSetup")

app
    .use(morgan('dev'))
    .use(express.json())
    .use(cookieParser())

const corsOptions = {
    credentials: true,
    origin: "http://localhost:5173"
}

app.use(cors(corsOptions));

const topicRouter = require('./routes/topicRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const tomeRouter = require('./routes/tomeRoutes')

app.get('/', function (req, res) {
    res.send('Hello One Piece Univers !');
});

app.use('/api/topics', topicRouter)
app.use('/api/users', userRouter)
app.use('/api/reviews', reviewRouter)
app.use('/api/tomes', tomeRouter)

app.get('*', (req, res) => {
    res.status(404).json({message: "Page not found"})
})

app.listen(port, () => console.log(
	`Notre application Node est démarrée sur : http://localhost:${port}`)
)