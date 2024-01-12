const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");

const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "202222",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

async function checkBillRemaing() {
  try {
    let result = await db.query("SELECT * FROM messdata WHERE status <> 'PAID';");
    return result.rows;
  } catch (error) {
    console.error("Error in checkBillRemaing:", error);
    throw error;
  }
}

app.get("/", async (req, res) => {
  try {
    let responses = await db.query('SELECT * FROM messdata');
    let months = [];
    let bill = [];
    let status = [];
    let pending = [];

    for (let i = 0; i < responses.rows.length; i++) {
      months.push(responses.rows[i].month);
      bill.push(responses.rows[i].bill);
      status.push(responses.rows[i].status);
      pending.push(responses.rows[i].pending);
    }

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${day}/${month}/${year}`;
    let currentMonth = months[month - 1];

    let notPaidBills = await checkBillRemaing();
    let totalAmountNotPaid = 0
    for(let i = 0 ; i < notPaidBills.length ; i++){
      let notPaidBillValue = notPaidBills[0].bill
      totalAmountNotPaid = totalAmountNotPaid + notPaidBillValue
    }

    res.render("index.ejs", {
      date: fullDate,
      currentMonth: currentMonth,
      eachMonth: months,
      eachBill: bill,
      eachStatus: status,
      eachPending: pending,
      unpaidBills: totalAmountNotPaid,
    });
  } catch (err) {
    console.error("Error in / route:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
