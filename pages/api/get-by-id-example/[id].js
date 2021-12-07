import { NextApiRequest, NextApiResponse } from "next";

export default function getById(req = NextApiRequest, res = NextApiRequest) {
  res.json({ id: req.query.id, method: req.method, msg: "GetById" });
}
