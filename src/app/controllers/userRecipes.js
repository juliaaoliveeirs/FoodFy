const fs = require('fs')
const Intl = require('intl')
const data = require('../data.json')

exports.index = function(req, res) {
    return res.render('user/index', { items: data.recipes })
}

exports.about = function(req, res) {
    return res.render('user/about')
}

exports.recipes = function(req, res) {
    return res.render('user/recipes', { items: data.recipes })
}

exports.recipe = function(req, res) {

    const recipes = data.recipes
    const recipeIndex = req.params.index

    // passando o item de acordo com a posição dele no array
    return res.render('user/recipe', { recipe: recipes[recipeIndex] })

}