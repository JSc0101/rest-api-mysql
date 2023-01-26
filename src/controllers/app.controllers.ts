import { Request, Response } from "express";
import { conecct } from "../db";
export const getBooks = async (req: Request, res: Response): Promise<Response> => {
  const conn = await conecct();
  const [books] = await conn.query(`SELECT * FROM books`);
  return res.json(books);
};
export const saveBooks = (req: Request, res: Response) => {
  res.json({ save: "books" });
};
