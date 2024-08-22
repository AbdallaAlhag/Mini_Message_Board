import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const pool = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: process.env.role_name,
    password: process.env.role_password,
    database: process.env.database,
    port: 5432,
});

async function testConnection() {
    try {
        const client = await pool.connect();
        console.log('Connected to the database');
        client.release();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

testConnection();

export default pool;
