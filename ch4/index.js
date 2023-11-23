const express = require('express')
const path = require('path')
const app = new express();
const mongoose = require('mongoose');
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))
mongoose.connect('mongodb+srv://rgopani9097:Rutvik@00!@cluster0.ffyvbal.mongodb.net//myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

async function main(){
    // crud operation
    // crete a data in db
    try{
        const blogpost = BlogPost.create({
            title:"this is the title paragraph of first db",
            body:"this is the body paragraph of our db"
        })
    console.log(blogpost);
    }
    catch(error){
        console.log(error)
    }               
    }
    main().catch(console.error);

app.listen(4000, () => {
    console.log('App listening at port 4000')
})
// define path for html files
app.get('/', (req,res) => {
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index');
})
app.get('/about', (req,res) => {
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about');
})
app.get('/contact', (req,res) => {
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact');
})
app.get('/post', (req,res) => {
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post');
})