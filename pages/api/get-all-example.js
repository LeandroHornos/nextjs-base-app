/* Ejemplo de una ruta api que acepta peticiones get. 
En esta ruta se consulta a una base de datos y se devuelve el contenido
de una coleccion entera
*/

import { NextApiRequest, NextApiResponse } from "next";



export default function getAll(req = NextApiRequest, res = NextApiRequest) {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Solo se aceptan solicitudes GET" });
  } else {
    res.status(200).json({ hello: "World", method: req.method });
  }
}
