const CategoryModel = require('../models/category');
const ProductModel = require('../models/product');
let test = (req, res) => {
    // const products = ProductModel.find({}, (err, data) => {
    //     console.log(data);
    // });
    // CategoryModel.find({}, (err, docs) => {
    //     console.log(docs);
    // });
    ProductModel.find().populate({ path: "cat_id" }).exec((err, data) => {
        console.log(data[0].name);
    });
}

const testForm = (req, res) => {
    res.send(`
        <form method=post>
            <input type=text name=email />
            <input type=submit name=sbm value=Send />
        </form>
    `);
}


const actionForm = (req, res) => {
    res.send(req.body.email);
}

module.exports = {
    testForm,
    actionForm,
    test,
}