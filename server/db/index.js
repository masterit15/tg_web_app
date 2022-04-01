const sequelize = require("sequelize");
require('dotenv').config()
const DBname = process.env.DBname
const DBlogin = process.env.DBlogin
const DBpassword = process.env.DBpassword
const DBhost = process.env.DBhost
const DBport = process.env.DBport

const db = new sequelize(DBname, DBlogin, DBpassword, {
  dialect: "mysql",
  host: DBhost,
  port: DBport,
  define: {
    timestamps: false
  },
  logging: false
});
db.sync().then(result=>{
  // console.log(result);
})
.catch(err=> {
  console.log(err)
});
module.exports = db;