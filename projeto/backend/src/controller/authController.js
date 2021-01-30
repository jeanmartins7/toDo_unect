const express = require("express");

const Todo = require("../model/Todo");
const Done = require("../model/Done");

const router = express.Router();

router.post("/todo", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    return res.send({ todo });
  } catch (err) {
    return res.status(400).send({ error: "todo failed" });
  }
});

router.post("/done", async (req, res) => {
  try {
    const done = await Done.create(req.body);

    return res.send({ done });
  } catch (err) {
    return res.status(400).send({ error: "todo failed" });
  }
});

router.get("/todo", async (req, res) => {
  try {
    var result = await Todo.find().exec();
    console.log(result);
    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "todo failed" });
  }
});

router.get("/done", async (req, res) => {
  try {
    var result = await Done.find().exec();
    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "Done failed" });
  }
});

router.delete("/todo/:id", async (req, res) => {
  try {
    var result = await Todo.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "todo failed" });
  }
});

router.delete("/done/:id", async (req, res) => {
  try {
    var result = await Done.deleteOne({ _id: req.params.id }).exec();
    res.send(result);
  } catch (err) {
    return res.status(400).send({ error: "done failed" });
  }
});

module.exports = (app) => app.use("/auth", router);
