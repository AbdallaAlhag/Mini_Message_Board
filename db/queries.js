import pool  from "./pool.js";
export async function getUserMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

export async function insertUsername(username, text) {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
}

export async function getSingleMessages(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0] || null;
}
