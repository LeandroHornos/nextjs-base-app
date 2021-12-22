/* 
ToDo: Ejemplo
-----------------
Esta ruta de la api sirve de ejemplo de operaciones CRUD
con la base de datos. Puede usarse para testear la configuración
del template antes de comenzar un proyecto.
*/

import connectDB from "../../../config/connectDB";
import Todos from "../../../models/todoModel";

import { getSession } from "next-auth/client";

connectDB();

export default async function handler(req, res) {
  console.log("Handler dice ola");
  switch (req.method) {
    case "POST":
      createTodo(req, res);
      break;
    case "GET":
      getTodos(req, res);
      break;
  }
}

export async function createTodo(req, res) {
  // console.log("createTodo saluda!");
  // console.log(req.body);
  // console.log(req.method);
  // Crea una nueva tarea en la base de datos
  try {
    const session = await getSession({ req });

    console.log({ session, todo: req.body });
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
    console.log("oops, ocurrió un error");
    res.status(500).json({ msg: err.message });
  }
}

export async function getTodos(req, res) {
  console.log("get todos saluda!");

  try {
    // Obtener la sesión
    const session = await getSession({ req });
    // Si no hay sesión, retornar error
    if (!session) {
      return res
        .status(400)
        .json({ msg: "Authentication Error. ¿Who are you?" });
    }
    // Obtengo el id del usuario y hago la query
    const { userId } = session;
    const todos = await Todos.find({ user: userId });
    res.json(todos);
  } catch (err) {
    console.log("oops, ocurrió un error");
    res.status(500).json({ msg: err.message });
  }
}
