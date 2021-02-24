const Category = require('../Models/Category')

module.exports = {
  async create(request, response){
    try {

    }catch(err){
      return res.status(400).send({ error: 'Category registration has failed' });
    }
  },
}