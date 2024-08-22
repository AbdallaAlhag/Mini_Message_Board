#! /usr/bin/env node
import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (username,text) 
VALUES
  ('Bryan', 'Hello World!'),
  ('Odin', 'Hi there!'),
  ('Damon', 'Goodbye World!');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
