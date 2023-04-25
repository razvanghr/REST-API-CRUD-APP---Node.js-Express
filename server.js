import express from "express";
import bodyParser from "body-parser";

// ----- Routes -----
import routerUsers from "./routes/users.js"; // routerUser

const app = express();
app.use(express.json());
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use("/users", routerUsers);

app.get("/", (req, res) => {
  res.send("Main-Page");
});

app.listen(PORT, () => {
  console.log(`Aplicatia ruleaza pe portul ${PORT}`);
});
