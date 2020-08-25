const fs = require('fs')
const AdminRecipes = require('../models/AdminRecipes')

module.exports = {
    index(req, res) {
        return res.render('admin/recipes/index', { recipes: data.recipes })
    },
    create(req, res) {
        return res.render('admin/recipes/create')
    },
    show(req, res) {
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })

        if (!foundRecipe) return res.send('Receita não encontrada!')

        const recipe = {
            ...foundRecipe
        }

        return res.render('admin/recipes/show', { recipe })
    },
    edit(req, res) {
        const { id } = req.params

        const foundRecipe = data.recipes.find(function(recipe) {
            return recipe.id == id
        })

        if (!foundRecipe) return res.send('Receita não encontrada!')

        const recipe = {
            ...foundRecipe
        }

        return res.render('admin/recipes/edit', { recipe })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") return res.send('Por favor, preencha todos os campos!')
        }

        let { image_url, title, author, ingredients, preparation, information } = req.body
        let id = 1
        const lastRecipe = data.recipes[data.recipes.length - 1]

        if (lastRecipe) {
            id = lastRecipe.id + 1
        }

        data.recipes.push({
            ...req.body,
            id
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Arquivo com erro')

            return res.redirect(`/admin/recipes/${id}`)
        })
    },
    put(req, res) {
        const { id } = req.body
        let index = 0

        const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
            if (id == recipe.id) {
                index = foundIndex
                return true
            }
        })

        if (!foundRecipe) return res.send('Receita não encontrada!')

        const recipe = {
            ...foundRecipe,
            ...req.body,
            id: Number(req.body.id)
        }

        data.recipes[index] = recipe

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Arquivo com erro')

            return res.redirect(`/admin/recipes/${id}`)
        })
    },
    delete(req, res) {
        const { id } = req.body

        const filteredRecipes = data.recipes.filter(function(recipe) {
            return recipe.id != id
        })

        data.recipes = filteredRecipes

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Arquivo com erro')

            return res.redirect('/admin/recipes')
        })
    }
}