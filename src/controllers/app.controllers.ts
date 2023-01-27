import { Request, Response } from "express";
import { conecct } from "../db";
import { books } from "../interfaces/books";
export const getBooks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const conn = await conecct();
  const [books] = await conn.query(`SELECT * FROM books`);
  return res.json(books);
};
export const saveBooks = async (req: Request, res: Response) => {
  const books: books = req.body;
  const conn = await conecct();
  await conn.query(`INSERT INTO books SET ?`, [books]);
  res.json({
    message: "books create",
    books: {
      data: {
        title: books.title,
        description: books.description,
      },
    },
  });
};
