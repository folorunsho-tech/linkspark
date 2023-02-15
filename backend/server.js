const express = require("express");
const app = express();

app.use(cors());
app.listen(3000, () => {
  console.log(`linkspark app listening on port ${port}`);
});
