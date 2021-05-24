import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import config from './config';
// import connectDb from './data-access';

// const apiRoot: number = config.api_port;
const app = express();
app.use(bodyParser.json());
// app.use(cors());

// app.post(`${apiRoot}/user`,)

async function startServer () {
    // connectDb();
    app.listen(3500, ()=>{
        console.log(`listening on port: 3500`)
    }).on('error', (err: Error)=>{
        console.log(err.message)
    })
}

startServer();