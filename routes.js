const express = require('express')
const routes = express.Router()
const adminRecipes = require('./controllers/admin/recipes')
const userRecipes = require('./controllers/user/recipes')

routes.get('/', function(req,res) {
    return res.redirect('/user')
})

routes.get('/', userRecipes.index)
routes.get('/about', userRecipes.about)
routes.get('/recipes', userRecipes.recipes)
routes.get("/recipes/:index", userRecipes.recipe)


routes.get('/admin/recipes', adminRecipes.index)
routes.get('/admin/recipes/create', adminRecipes.create)
routes.get('/admin/recipes/:id', adminRecipes.show)
routes.get('/admin/recipes/:id/edit', adminRecipes.edit)
routes.post('/admin/recipes', adminRecipes.post)
routes.put('/admin/recipes', adminRecipes.put)
routes.delete('/admin/recipes', adminRecipes.delete)



module.exports = routes