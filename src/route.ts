import express, { Request, Response } from "express";
import * as Page from "./page";
export const router = express.Router();
router.use(express.json());

router.get("/users", async (_req: Request, res: Response) => {
  try {
    const uid = _req.headers.key;
    const result = Page.FindUser(String(uid));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json((error as Error).message);
  }
});
