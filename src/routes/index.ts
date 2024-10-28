import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

/* GET home page. */
router.get("/", function (req: Request, res: Response) {
	res.render("index", { title: "User's logger" });
});

export default router;
