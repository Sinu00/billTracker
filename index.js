const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
let date = new Date()
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let fullDate = `${day}.${month}.${year}`;
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let currentMonth = months[month - 1];

  res.render("index.ejs", {
    date: fullDate,
    currentMonth: currentMonth,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
