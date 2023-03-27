const ProductModel =  require('../Models/ProductModel');

class ProductController {
    async store(req, res) {
        const createProduct = await ProductModel.create(req.body);
        return res.status(200).json(createProduct);
    }

    async index(req, res) {
        const products =  await ProductModel.find();
        return res.status(200).json(products);
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductModel.findById(id);
            if(!product){
                return res.status(404).json({ message: 'product does not exist' });
            }
            return res.status(200).json(product);
        } catch(error) {
            return res.status(404).json({ message: 'Verify the product id'})
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            await ProductModel.findByIdAndUpdate(id, req.body);
            
            return res.status(200).json({ message: 'Product updated'}) 
        } catch (error) {
            return res.status(404).json({ message: 'Failed to update product'})
        }
    }

    async destroy(req, res) {
     try {
        const {id} = req.params;
        const productDeleted = await ProductModel.findByIdAndDelete(id);
        if(!productDeleted) {
            return res.status(404).json({ message: 'Product does not exist'})
        }
        return res.status(200).json({message: 'Product deleted'})
     } catch (error) {
        return res.status(404).json({message: 'Failed to deleted product'})
     }
    }
}

module.exports = new ProductController();



