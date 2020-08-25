const express = require('express')
const routes = express.Router()
const admin = require('./controllers/adminRecipes.js')
const user = require('./controllers/userRecipes.js')

routes.get('/', function(req,res) {
    return res.redirect('/user')
})

routes.get('/user', user.index)
routes.get('/about', user.about)
routes.get('/recipes', user.recipes)
routes.get("/recipes/:index", user.recipe)


routes.get('/admin/recipes', admin.index)
routes.get('/admin/recipes/create', admin.create)
routes.get('/admin/recipes/:id', admin.show)
routes.get('/admin/recipes/:id/edit', admin.edit)
routes.post('/admin/recipes', admin.post)
routes.put('/admin/recipes', admin.put)
routes.delete('/admin/recipes', admin.delete)

module.exports = routes