import dotenv from 'dotenv';
dotenv.config();

import { initPlaid } from './controllers/PlaidController';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes'
import { connect } from './database'

// start db connection
connect();

const PORT = process.env.PORT || 8080;
const app = express();
initPlaid();

app.use(bodyParser.urlencoded({extended: false}),);
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
})
