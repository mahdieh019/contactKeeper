const express=require('express');
const app=express();
const connectDB=require('./config/db');


//Init Middleware (body parser is part of express)
app.use(express.json({extended:false}));

//Connect Database
connectDB();

// app.get('/',(req,res)=>res.send('Hello World'))
app.get('/',(req,res)=>res.json({msg:'Welcome to the ContactKeeper API'}))


app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))