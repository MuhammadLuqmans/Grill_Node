import mongoose from "mongoose";


const ProductSchema = mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    category:{
        type:String,
    },
    colors: [
        {
        colorName: {
            type: String,
        },
    },
    ],
    discreption: {
        type: String,
    },
    sku: {
        type: String,
    },
})

const ProductSch = mongoose.model('GrillsTypes', ProductSchema )

export default ProductSch;