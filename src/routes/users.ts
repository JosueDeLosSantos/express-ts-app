import express, { Router } from "express";
import {
	createUsernameGet,
	createUsernamePost,
	filterUsernames,
	getUsernames,
	deleteAllUsers
} from "../controllers/usernames";

const router: Router = express.Router();

/* GET users listing. */
router.get("/", getUsernames);

/* POST filtered users. */
router.post("/", filterUsernames);

/* Get filtered users using queries lik: /users/search?filter=.... */
router.get("/search", filterUsernames);

/* DELETE filtered users. */
router.get("/delete", deleteAllUsers);

/* GET add users form. */
router.get("/new", createUsernameGet);

/* POST add new users. */
router.post("/new", createUsernamePost);

export default router;
