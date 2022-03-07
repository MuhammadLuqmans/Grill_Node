import  express  from "express";
import { PostProducts } from "../Controller/ProductController.js";

const router = express.Router();

router.post('./send', PostProducts);


export default router;