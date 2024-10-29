const express = require("express");

const PORT = 8001;
const app = express();

app.use("/", (req, res) => {
  return res.status(200).json({ msg: "Customer service" });
});

app.listen(PORT, () => {
  console.log("Customer is Listening to Port" + PORT);
});
