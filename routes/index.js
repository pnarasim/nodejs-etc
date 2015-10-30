/*
 * GET home page.
 */

var models = require("../models");
var Sequelize = require('sequelize');

exports.index = function(req, res) {
    console.log("AHA index");
    res.render("index", {title: 'BLE advertisers Index' });
};

exports.getadvertisers = function(req, res) {
    console.log("AHA get advs");
        models.advertisers.findAll({
        group: ['ad_addr']
        }
    ).then(function(result){
    console.log(result);
    ///console.log(result.rows);
    res.render("index", {title: 'BLE advertisers', result: result});
    //res.json(result); 
    
    });
};

