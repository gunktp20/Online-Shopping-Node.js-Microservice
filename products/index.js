const express = require("express");

const PORT = 8002;
const app = express();

app.use("/", (req, res) => {
  return res.status(200).json({ msg: "Product service" });
});

app.listen(PORT, () => {
  console.log("Customer is Listening to Port" + PORT);
});
