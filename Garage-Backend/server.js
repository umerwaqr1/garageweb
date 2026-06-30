const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Database/db') ;

const intakeRoutes= require('./Routes/intakeRoutes');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/intake', intakeRoutes);

app.use('/api/auth',require('./Routes/authRoutes'));

app.get('/',(req,res)=>{
    res.json({status:"ONLINE", system:"GARAGE_PK_CORE_ENGINE"});
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=>{
    console.log(`>>> Pit Crew Monitoring on Port: ${PORT}`);
});

