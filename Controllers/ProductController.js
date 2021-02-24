const Product = require('../Models/Product')

module.exports = {
  async create(request, response){
    try {

    }catch(err){
      return res.status(400).send({ error: 'Product registration has failed' });
    }
  },

  async get(request, response){
    try {

    }catch(err){
      return res.status(400).send({ error: 'Product search has failed' });
    }
  },

  async update(request, response){
    try {

    }catch(err){
      return res.status(400).send({ error: 'Product update has failed' });
    }
  },

  async delete(request, response){
    try {

    }catch(err){
      return res.status(400).send({ error: 'Product deletion failed' });
    }
  },
}