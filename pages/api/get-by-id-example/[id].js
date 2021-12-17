/* Ejemplo de una ruta dinámica de la api que acepta peticiones get proporcionando
un id. 
En esta ruta se consulta a una base de datos y devuelve el elemento correspondiente al
id proporcionado
*/

import { NextApiRequest, NextApiResponse } from "next";

export default function getById(req = NextApiRequest, res = NextApiRequest) {
  res.json({ id: req.query.id, method: req.method, msg: "GetById" });
}
