/*
 * GET home page.
 */

var models = require("../models");

exports.index = function(req, res) {
    console.log("AHA index");
    res.render("index", {title: 'BLE advertisers Index' });
};

exports.getadvertisers = function(req, res) {
    console.log("AHA get advs");
    models.advertisers.findAll().then(function(result){
    console.log(result);
    res.render("index", {title: 'BLE advertisers', result: result});
    //res.json(result); 
    
    });
};

