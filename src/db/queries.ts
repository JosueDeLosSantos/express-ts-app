import pool from "./pool";

export async function getAllUsernames() {
	const { rows } = await pool.query("SELECT * FROM usernames");
	return rows;
}

export async function getFilteredUsernames(query: string) {
	const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE $1", [
		`%${query}%`
	]);
	return rows;
}

export async function insertUsername(username: string) {
	await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export async function deleteAllUsernames() {
	await pool.query("TRUNCATE TABLE usernames");
}
