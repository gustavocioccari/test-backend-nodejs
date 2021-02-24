const Category = require('../Models/Category')

module.exports = {
  async create(request, response){
    var { category } = request.body
    
    try {
      if (await Category.findOne({ category }))
        return response.status(400).send({ error:'Category already exists' })
      
      category = await Category.create(request.body)

      return response.json({ category })
    }catch(err){
      return response.status(400).send({ error: 'Category registration has failed' }), console.log(err)
    }
  },
}