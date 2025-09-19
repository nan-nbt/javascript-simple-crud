const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('../config/db');
const router = require('../router/groupm_router');

app.use(cors());
app.use(express.json());

app.use('/groupms', router);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});