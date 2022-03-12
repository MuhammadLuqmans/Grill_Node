import  express  from "express";
import { DeleteDocuments, EditeDocuments, getProducts, PostProducts } from "../Controller/ProductController.js";

const router = express.Router();

router.post('/send', PostProducts);
router.get('/read', getProducts);
router.delete('/delete/:id' , DeleteDocuments);
router.get('/eidite/:id' , EditeDocuments);


export default router;