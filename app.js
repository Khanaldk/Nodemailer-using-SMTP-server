const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const routes=require('./routes/SendMaileRoutes')

const port=process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

app.listen(port,()=>{
    console.log(`Listening to port ${port}.`)
});