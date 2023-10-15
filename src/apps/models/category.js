const mongoose = require("../../common/database")();
const categorySchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
    }
},{timestamps: true});

const CategoryModel = mongoose.model("Categories", categorySchema, "categories");
module.exports = CategoryModel;

    