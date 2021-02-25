const Product = require('../Models/Product')

module.exports = {
  async create(request, response){
    const { title,description,price,category } = request.body
    
    try {
      if (await Product.findOne({ title }))
        return response.status(400).send({ error:'Category already exists' })

      const product = await Product.create(request.body)

      return response.json({ product })

    }catch(err){
      return response.status(400).send({ error: 'Product registration has failed' }), console.log(err)
    }
  },

  async get(request, response){
    const { title = null, categoryId = null } = request.query

    try {
      if (title && categoryId){
        const products = await Product.find({$and: [{ title: title }, { categoryId: categoryId }],})
        return response.json({ products })
      }
      else if (title && !categoryId){
        const products = await Product.find({ title: title })
        return response.json({ products })
      }
      else if (!title && categoryId){
        const products = await Product.find({ categoryId: categoryId })
        return response.json({ products })
      }

      const products = await Product.find()
      
      return response.json(products)
    }catch(err){
      return response.status(400).send({ error: 'Product search has failed' });
    }
  },

  async update(request, response){
    try {
      const { id } = request.params
      const update = request.body

      await Product.findByIdAndUpdate(id,update)
      response.json( update )
    }catch(err){
      return response.status(400).send({ error: 'Product update has failed' });
    }
  },

  async delete(request, response){
    try {
      const { id } = request.params

      await Product.findByIdAndRemove(id)
      response.json({ message: "Product deleted." })
    }catch(err){
      return response.status(400).send({ error: 'Product deletion failed' });
    }
  },
}