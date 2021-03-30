const express = require('express');

const postRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

const app = express();
app.use(express.json());


app.use('/screams', postRouter);
app.use('/auth', authRouter);


app.listen(5000, () => {
    console.log(`App is listsening on port 5000`);
})