const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: './../../local.env' });

const app = require('./app');

const DB = process.env.MONGODB_URL.replace('<password>', process.env.MONGODB_PASSWORD);


mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));

const port =  3001;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
