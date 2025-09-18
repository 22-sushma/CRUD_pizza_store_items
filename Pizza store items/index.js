const express = require("express");

const routes = require("./routes/pizza");

const app = express();

const PORT = 5001;

app.use(express.json());

app.use("/pizza", routes);

app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
