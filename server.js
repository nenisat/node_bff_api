import express from "express";
import router from './src/routes';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(8080);
