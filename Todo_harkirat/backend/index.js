const express = require("express");
const cors = require("cors");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const { json } = require("zod");

app.use(express.json());
app.use(cors());
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos });
});
app.post("/todo", async (req, res) => {
  const createpayLoad = req.body;
  const parsepayLoad = createTodo.safeParse(createpayLoad);
  console.log(parsepayLoad);
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: "wrong input" });
    return;
  }
  //   put it in mongodb
  const result = await todo.create({
    title: createpayLoad.title,
    description: createpayLoad.description,
  });
  res.json({ msg: "object is successfully saved in db", _id: result._id });
});
app.put("/completed", async (req, res) => {
  const createpayLoad = req.body;

  const parsepayLoad = updateTodo.safeParse(createpayLoad);
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: "wrong Id" });
    return;
  }
  //   update it into mongodb

  await todo.updateOne({ _id: parsepayLoad.id }, { completed: true });
  res.json({ msg: "Todo is marked as completed. " });
});

app.listen(3000, () => {
  console.log(" app is listening on 3000 ");
});
