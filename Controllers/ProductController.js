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
    try {

    }catch(err){
      return response.status(400).send({ error: 'Product search has failed' });
    }
  },

  async update(request, response){
    try {

    }catch(err){
      return response.status(400).send({ error: 'Product update has failed' });
    }
  },

  async delete(request, response){
    try {

    }catch(err){
      return response.status(400).send({ error: 'Product deletion failed' });
    }
  },
}