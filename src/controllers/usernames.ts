import { Request, Response } from "express";
import {
	getAllUsernames,
	getFilteredUsernames,
	insertUsername,
	deleteAllUsernames
} from "../db/queries";

export async function getUsernames(req: Request, res: Response) {
	// get all usernames
	const usernames = await getAllUsernames();
	res.render("users", { users: usernames });
}

export async function filterUsernames(req: Request, res: Response) {
	if (req.query.filter) {
		const { filter } = req.query;
		const usernames = await getFilteredUsernames(filter as string);
		res.render("filter", { users: usernames });
	} else {
		const { filter } = req.body;
		const usernames = await getFilteredUsernames(filter as string);
		res.render("filter", { users: usernames });
	}
}

export async function createUsernameGet(_: Request, res: Response) {
	// render the form
	res.render("form");
}

export async function createUsernamePost(req: Request, res: Response) {
	const { username } = req.body;
	await insertUsername(username);
	res.redirect("/users");
}

export async function deleteAllUsers(_: Request, res: Response) {
	await deleteAllUsernames();
	res.redirect("/users");
}
