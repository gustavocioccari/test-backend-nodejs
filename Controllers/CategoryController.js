const Category = require('../Models/Category')

module.exports = {
  async create(request, response){
    const { name } = request.body
    
    try {
      if (await Category.findOne({ name }))
        return response.status(400).send({ error:'Category already exists' })
      
      const category = await Category.create(request.body)

      return response.json({ category })
    }catch(err){
      return response.status(400).send({ error: 'Category registration has failed' }), console.log(err)
    }
  },

  async get(request, response){
    try {
      const categories = await Category.find()
      
      return response.json(categories)
    }catch(err){
      return response.status(400).send({ error: 'Product search has failed' });
    }
  },
}