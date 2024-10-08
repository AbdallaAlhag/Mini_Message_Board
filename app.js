import express from "express";
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './routes/index.js';
import { body, validationResult } from 'express-validator';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT,"0.0.0.0", () => console.log(`My first Express app - listening on port ${PORT}!`));
// view engine setup
app.set('view engine', 'ejs');
// middleware for static files
app.use(express.static('public'));
// middleware for parsing request body/logging
app.use(morgan('dev'));
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use('/', router)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});