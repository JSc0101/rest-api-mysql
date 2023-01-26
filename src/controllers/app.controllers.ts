import { Request, Response } from "express";

export const initialApp = (req: Request, res: Response) => {
  res.json({ welcome: "Rest api..." });
};
export const getProducts = (req: Response, res: Response) => {
  
};
export const saveProducts = (req: Request, res: Response) => {
  res.json({"save": "books"})
};
