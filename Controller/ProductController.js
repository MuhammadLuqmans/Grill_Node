import ProductSch from "../Schema/ProductSchema.js";


export const PostProducts = (request , response) => {
    try{
        const products = ProductSch(request.body);
        products.save();
        response.status(200).json('Data is successfully save')
    }catch(error){
        response.status(500).json(error)
        console.log('error during send data')
    }
}