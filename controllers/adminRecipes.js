const fs = require('fs')
const Intl = require('intl')
const data = require('../data.json')


exports.index = function(req,res) {
    return res.render('admin/recipes/index', { recipes: data.recipes})
}

exports.create = function(req, res) {

    return res.render('admin/recipes/create')
}

exports.show = function(req, res) {
    
}

exports.edit = function(req, res) {
    
}

exports.post = function(req, res) {
    
}

exports.put = function(req, res) {
    
}

exports.delete = function(req, res) {
    
}