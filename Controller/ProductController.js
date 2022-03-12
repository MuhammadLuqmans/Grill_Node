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

export const getProducts = async(requset , response)=>{
    try{
      let product = await ProductSch.find({}) 
       response.status(200).json(product);
    }catch(error){
        response.status(500).json(error);
    }
 
}

export const DeleteDocuments = async (request ,response) => {
    console.log(request.params.id)
    try{
        const DleDoc = await ProductSch.findById(request.params.id);
        await DleDoc.delete();
    }catch(error){
        response.status(200).json('delete successfully')
    }
}

export const EditeDocuments = async (request ,response) => {
    console.log(request.params.id)
    try{
        const EditDoc = await ProductSch.findById(request.params.id);
        response.status(200).json(EditDoc);
    }catch(error){
        response.status(200).json(error)
    }
}