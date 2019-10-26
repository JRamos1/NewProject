const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql")
const sequelize = require("sequelize")
const session = require("express-session")
const passport = require("passport")
const bodyParser = require('body-parser')
const db = require("./models")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'ragtime cat', resave: true, saveUninitialized:true}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views','./views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./routes/auth.js')(app);
// Send every request to the React app
// Define any API routes before this runs


app.post('/api/users', function(req,res){
  db.User.create({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:req.body.password
  })
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
    console.log(err, req.body.email)
  })
})

app.get('/api/users', function(req,res){
  db.User.findAll({
    attributes:{
      exclude: ['password','email']
    }
  }).then(function(data){
    res.json(data)
  })
})


app.get("/api/curruser", function(req,res){
  db.User.findOne({
    where:{
      id: req.user.id
    },
    attributes:{
      exclude:["password", "email"]
    }
  })
  .then(function(data){
    res.json(data)
  })
})
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

db.sequelize.sync().then(function(){
  console.log("Nice Database looks fine!")

  app.listen(PORT, function(){
    console.log(`App listening on ${PORT}`)
  })

}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
})