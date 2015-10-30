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
    //console.log(result);
    ///console.log(result.rows);
    res.render("index", {title: 'BLE advertisers', result: result});
    //res.json(result); 
    
    });
};

exports.getaggregators = function(req, res) {
    console.log("AHA get aggs");
    var advs = req.body.selectAdvs;
    console.log("Got post request with advertiser: " + advs);
    models.advertisers.findAll({
        where: {
            ad_addr: advs
        }
        }
    ).then(function(result){
        //console.log(result);
        //res.json(result); 
        //res.end();
        res.render("aggs", {title: 'BLE Aggregators', result: result  
        });
    });
    };



