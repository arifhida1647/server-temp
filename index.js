// Import packages
const express = require("express");
const home = require("./routes/home");

// Middlewares
const app = express();
app.use(express.json());

// Disable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Mengizinkan akses dari semua domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors()); 
// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
