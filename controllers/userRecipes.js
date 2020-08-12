const fs = require('fs')
const Intl = require('intl')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render('user/index')
}

exports.about = function (req, res) {
    return res.render('user/about')
}

exports.recipes = function (req, res) {
    return res.render('user/recipes', { items: data })
}

exports.recipe = function (req, res) {

    const recipes = data
    const recipeIndex = req.params.index

    // passando o item de acordo com a posição dele no array
    return res.render('user/recipe', { recipe: recipes[recipeIndex] })

}