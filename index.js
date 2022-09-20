const express = require("express");
const scoreRouter = require("./routers/scores");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/scores", scoreRouter);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
