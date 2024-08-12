require('dotenv').config(); //this reads out .env file

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Customer = require('./models/customer.js');
app.use (express.json());
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Home Page//
app.get('/',(req,res)=>{
  res.render('home.ejs')
})

app.get('/Customer', async (req,res)=>{
  try{
      res.json(await Customer.find({}))
  }catch (err){
      res.status(400).json(err)
  }
});

app.post('/Customer', async (req,res)=>{
  try{
      res.json(await Customer.create(req.body))
  }catch (err){
      res.status(400).json(err)
  }
});


app.post('/Sign-up', async (req,res)=>{
  try{
      await Customer.create(req.body)
      res.redirect('/')
  }catch (err){
      res.status(400).json(err)
  }
});

app.put('/Customer/:id', async (req,res)=>{
  try{
      res.json(await Customer.findByIdAndUpdate(req.params.id, req.body))
  }catch (err){
      res.status(400).json(err)
  }
});

app.delete('/Customer/:id', async (req,res)=>{
  try{
      res.json(await Customer.findByIdAndDelete(req.params.id))
  }catch (err){
      res.status(400).json(err)
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});