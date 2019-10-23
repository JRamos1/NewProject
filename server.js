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
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function(){
  console.log("Nice Database looks fine!")

  app.listen(PORT, function(){
    console.log(`App listening on ${PORT}`)
  })

}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
})