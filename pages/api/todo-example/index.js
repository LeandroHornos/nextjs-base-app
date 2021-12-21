import connectDB from "../../../config/connectDB";
import Todos from "../../../models/todoModel";

import { getSession } from "next-auth/client";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await createTodo(req, res);
      break;
  }
}

const createTodo = async (req, res) => {
  // Crea una nueva tarea en la base de datos
  try {
    const session = await getSession({ req });
    console.log("createTodo saluda!")
    console.log({ session, todo: req.body});
    if (!session) {
      return res
        .status(400)
        .json({ msg: "Authentication Error. ¿Who are you?" });
    }
    const { todo } = req.body;
    const { userId } = session;

    if (!todo) {
      return res.status(400).json({
        msg: "It seems that there is no todo here, so... there is nothing to do ;) Bye.",
      });
    }

    const newTodo = new Todos({
      name: todo.toLowerCase(),
      user: userId,
    });

    await newTodo.save();
    res.json({
      msg: "Well, it seems that you succeeded in creating a new todo. Cheers!",
    });
  } catch (err) {
    console.log("oops, ocurrió un error")
    res.status(500).json({ msg: err.message });
  }
};
