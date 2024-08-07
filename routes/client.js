import express from "express"
import clientController from "../controller/ClientController.js";
import {isAuthenticatedGlobal} from "../middleware/auth.js";

const router = express.Router();

router.use(isAuthenticatedGlobal);

export {router};