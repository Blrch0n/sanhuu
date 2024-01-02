const fs = require("fs").promises;

const { v4: uuidv4 } = require("uuid");

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = jwt.sign({ email }, "alkdgjkladjg");

  res.json({
    token,
  });
});

app.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (user) {
    return res.status(409).json({
      message: "User already exists",
    });
  }

  const id = uuidv4();

  users.push({
    id,
    name,
    email,
    password,
  });

  await fs.writeFile(filePath, JSON.stringify(users));

  const token = jwt.sign({ email }, "alkdgjkladjg");

  res.json({
    token,
    message: "User created",
  });
});

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "alkdgjkladjg");

    const { email } = payload;

    const { amount, date, isExpense, time, category_value, category_name } =
      req.body;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    records.push({
      amount,
      date,
      isExpense,
      time,
      category_value,
      category_name,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(records));

    res.json({
      message: "Record created",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});
app.post("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "alkdgjkladjg");
    const { email } = verify;
    const { categoryValueAdd_, categoryInputValue } = req.body;
    const filePath = "src/data/category.json";
    const rawFile = await fs.readFile(filePath, "utf8");

    const file = JSON.parse(rawFile);

    file.push({
      categoryValueAdd_,
      categoryInputValue,
      userEmail: email,
    });

    await fs.writeFile(filePath, JSON.stringify(file));
    res.json({
      message: "fine",
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.get("/users", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Error",
    });
  }

  try {
    const check = jwt.verify(authorization, "alkdgjkladjg");

    const { email } = check;

    const filePath = "src/data/users.json";

    const usersRaw = await fs.readFile(filePath, "utf-8");

    const users = JSON.parse(usersRaw);

    const profile = users.filter((user) => user.email === email);

    res.json({
      profile,
    });
  } catch (err) {
    return res.status(401).json({
      message: "error",
    });
  }
});

app.get("/records", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "alkdgjkladjg");

    const { email } = payload;

    const filePath = "src/data/records.json";

    const recordsRaw = await fs.readFile(filePath, "utf8");

    const records = JSON.parse(recordsRaw);

    const usersRecords = records.filter((record) => record.userEmail === email);

    res.json({
      records: usersRecords,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
});
app.get("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: "error",
    });
  }
  try {
    const verify = jwt.verify(authorization, "alkdgjkladjg");

    const { email } = verify;

    const filePath = "src/data/category.json";

    const rawFile = await fs.readFile(filePath, "utf-8");

    const file = JSON.parse(rawFile);

    const userCategory = file.filter((user) => user.userEmail === email);

    res.json({
      userCategory,
    });
  } catch (err) {
    res.status(401).json({
      message: "error1",
    });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
