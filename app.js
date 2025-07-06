const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
